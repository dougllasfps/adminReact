package org.dougllasfps.application.model.converter;

import org.dougllasfps.application.model.controleacesso.Grupo;
import org.dougllasfps.application.model.controleacesso.dto.GrupoDTO;
import org.dougllasfps.application.model.converter.generic.DtoConverter;
import org.dougllasfps.application.model.converter.generic.RequestResponseConverter;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class GrupoDtoConverter implements RequestResponseConverter<Grupo, GrupoDTO> {

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public DtoConverter<Grupo, GrupoDTO> toDto() {
        return entity -> modelMapper.map(entity, GrupoDTO.class);
    }

    @Override
    public DtoConverter<GrupoDTO, Grupo> toEntity() {
         return dto -> modelMapper.map(dto, Grupo.class);
    }
}
