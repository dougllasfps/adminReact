package org.dougllasfps.application.model.converter;

import org.dougllasfps.application.model.controleacesso.Grupo;
import org.dougllasfps.application.model.controleacesso.dto.GrupoDTO;
import org.dougllasfps.application.model.converter.generic.DtoConverter;
import org.dougllasfps.application.model.converter.generic.RequestResponseConverter;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SimpleGrupoDtoConverter implements RequestResponseConverter<Grupo, GrupoDTO> {

    @Autowired
    private ModuloDtoConverter moduloDtoConverter;

    @Override
    public DtoConverter<Grupo, GrupoDTO> toDto() {
        return entity -> {

            GrupoDTO dto = new GrupoDTO();
            dto.setDescricao(entity.getDescricao());
            dto.setLabel(entity.getLabel());
            dto.setId(entity.getId());

            if(entity.getModulo() != null){
                dto.setModulo(moduloDtoConverter.toDto().convert(entity.getModulo()));
            }

            return dto;
        };
    }

    @Override
    public DtoConverter<GrupoDTO, Grupo> toEntity() {
        return dto -> {

            Grupo entity = new Grupo();
            entity.setDescricao(dto.getDescricao());
            entity.setLabel(dto.getLabel());
            entity.setId(dto.getId());

            if(entity.getModulo() != null){
                entity.setModulo(moduloDtoConverter.toEntity().convert(dto.getModulo()));
            }

            return entity;
        };
    }
}
