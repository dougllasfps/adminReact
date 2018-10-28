package org.dougllasfps.application.service;

import org.dougllasfps.application.exception.ValidationException;
import org.dougllasfps.application.model.controleacesso.Modulo;
//import org.dougllasfps.application.model.controleacesso.ModuloPermissao;
import org.dougllasfps.application.model.controleacesso.Permissao;
//import org.dougllasfps.application.repository.ModuloPermissaoRepository;
import org.dougllasfps.application.repository.ModuloRepository;
import org.dougllasfps.application.repository.PermissaoRepository;
import org.dougllasfps.application.repository.PermissaoSpecs;
import org.dougllasfps.application.service.generic.impl.AbstractServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * Criado por dougllas.sousa em 10/10/2018.
 */
@Service
public class PermissaoService extends AbstractServiceImpl<Permissao, PermissaoRepository> implements Serializable{

    @Autowired
    private ModuloRepository moduloRepository;

    public List<Permissao> find(Permissao filtro, Long idModulo) {
        Specification<Permissao> specs = Specification.where ( (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.conjunction());

        if(filtro.getDescricao() != null && !"".equals(filtro.getDescricao().trim())){
            specs = specs.and(PermissaoSpecs.descricaoLike(filtro.getDescricao()));
        }

        if(filtro.getLabel() != null && !"".equals(filtro.getLabel().trim())){
            specs = specs.and(PermissaoSpecs.labelLike(filtro.getLabel()));
        }

        if(idModulo != null){
            specs = specs.and(PermissaoSpecs.hasModulo(idModulo));
        }

        return getRepository().findAll(specs);
    }

    @Override
    public void validateSave(Permissao permissao) {

        ValidationException e = new ValidationException();

        if(permissao.getId() == null && getRepository().existsByLabel(permissao.getLabel())){
            e.addError("Label já cadastrado anteriomente.");
        }

        if(permissao.getId() == null && getRepository().existsByDescricao(permissao.getDescricao())){
            e.addError("Descrição já cadastrada anteriomente.");
        }

        e.throwIfHasErrors();

    }

    public Optional<Permissao> findAndLoadById(Long id){
        return getRepository().findOneByIdFetchModulos(id);
    }

    public List<Modulo> obterModulosNaoAssociados(Permissao permissao){
        if(!Optional.ofNullable(permissao).map(Permissao::getId).isPresent()){
            return moduloRepository.findAll();
        }
        return moduloRepository.findModulosNotInPermissao(permissao);
    }

    @Override
    public void beforeSaveOrUpdate(Permissao permissao) {
        super.beforeSaveOrUpdate(permissao);
    }

    @Override
    public Permissao save(Permissao permissao) {
        // dá erro ao inserir permissao com modulos já salvo no banco
        Set<Modulo> modulos = permissao.getModulos();
        permissao.setModulos(null);

        super.save(permissao);
        permissao.setModulos(modulos);
        return getRepository().save(permissao);
    }

    @Override
    public Permissao update(Permissao permissao) {
        return super.update(permissao);
    }
}