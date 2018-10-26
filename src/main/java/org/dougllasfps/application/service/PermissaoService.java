package org.dougllasfps.application.service;

import org.dougllasfps.application.exception.ValidationException;
import org.dougllasfps.application.model.controleacesso.Modulo;
import org.dougllasfps.application.model.controleacesso.ModuloPermissao;
import org.dougllasfps.application.model.controleacesso.Permissao;
import org.dougllasfps.application.repository.ModuloPermissaoRepository;
import org.dougllasfps.application.repository.ModuloRepository;
import org.dougllasfps.application.repository.PermissaoRepository;
import org.dougllasfps.application.service.generic.impl.AbstractServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.List;

/**
 * Criado por dougllas.sousa em 10/10/2018.
 */

@Service
public class PermissaoService extends AbstractServiceImpl<Permissao, PermissaoRepository> implements Serializable{

    @Autowired
    private ModuloPermissaoRepository moduloPermissaoRepository;
    @Autowired
    private ModuloRepository moduloRepository;

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

    public List<ModuloPermissao> obterModulos(Permissao permissao){
        return  moduloPermissaoRepository.findByPermissao(permissao);
    }

    public List<Modulo> obterModulosNaoAssociados(Permissao permissao){
        return moduloRepository.findModulosNotInPermissao(permissao);
    }

    @Override
    public Permissao save(Permissao permissao) {
        return saveOrUpdate(permissao);
    }

    @Override
    public Permissao update(Permissao permissao) {
        return saveOrUpdate(permissao);
    }

    @Override
    public Permissao saveOrUpdate(Permissao permissao) {
        super.save(permissao);
        moduloPermissaoRepository.saveAll(permissao.getModulos());
        return permissao;
    }
}