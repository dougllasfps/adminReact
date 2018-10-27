package org.dougllasfps.application.service;

import org.dougllasfps.application.model.controleacesso.Grupo;
import org.dougllasfps.application.repository.GrupoRepository;
import org.dougllasfps.application.service.generic.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GrupoService extends AbstractServiceImpl<Grupo, GrupoRepository> {

    public Optional<Grupo> findAndLoadById(Long id){
        return getRepository().findOneFetchPermissoes(id);
    }
}