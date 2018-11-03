package org.dougllasfps.application.model.converter;

import org.dougllasfps.application.model.controleacesso.Usuario;
import org.dougllasfps.application.model.controleacesso.dto.UsuarioDTO;
import org.dougllasfps.application.model.converter.generic.DtoConverter;
import org.dougllasfps.application.model.converter.generic.RequestResponseConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;

@Component
public class UsuarioDtoConverter implements RequestResponseConverter<Usuario,UsuarioDTO> {

    @Autowired
    private SimpleGrupoDtoConverter simpleGrupoDtoConverter;

    @Override
    public DtoConverter<UsuarioDTO, Usuario> toEntity() {
        return dto -> {
            Usuario entity = new Usuario();
            entity.setEmail(dto.getEmail());
            if(dto.getGruposSelecionados() != null){
                entity.setGrupos(new HashSet<>(simpleGrupoDtoConverter.toEntity().convert(dto.getGruposSelecionados())));
            }
            return entity;
        };
    }

    @Override
    public DtoConverter<Usuario, UsuarioDTO> toDto() {
        return entity -> {
            UsuarioDTO dto = new UsuarioDTO();
            dto.setEmail(entity.getEmail());
            if(entity.getGrupos() != null){
                dto.setGruposSelecionados(simpleGrupoDtoConverter.toDto().convert(new ArrayList<>(entity.getGrupos())));
            }
            return dto;
        };
    }
}
