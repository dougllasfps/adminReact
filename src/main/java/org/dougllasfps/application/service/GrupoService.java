package org.dougllasfps.application.service;

import org.dougllasfps.application.model.controleacesso.Grupo;
import org.dougllasfps.application.model.controleacesso.Permissao;
import org.dougllasfps.application.repository.GrupoRepository;
import org.dougllasfps.application.service.generic.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class GrupoService extends AbstractServiceImpl<Grupo, GrupoRepository> {

    public Optional<Grupo> findAndLoadById(Long id){
        return getRepository().findOneFetchPermissoes(id);
    }

    @Override
    public Grupo save(Grupo grupo) {
        Set<Permissao> permissoes = grupo.getPermissoes();
        grupo.setPermissoes(null);
        getRepository().save(grupo);
        grupo.setPermissoes(permissoes);
        return super.save(grupo);
    }
}