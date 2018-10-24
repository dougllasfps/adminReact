package org.dougllasfps.application.model.converter;

import org.dougllasfps.application.model.controleacesso.Modulo;
import org.dougllasfps.application.model.controleacesso.dto.ModuloDTO;
import org.dougllasfps.application.model.converter.generic.DtoConverter;
import org.dougllasfps.application.model.converter.generic.RequestResponseConverter;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Criado por dougllas.sousa em 24/10/2018.
 */
@Component
public class ModuloDtoConverter implements RequestResponseConverter<Modulo, ModuloDTO> {

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public DtoConverter<Modulo, ModuloDTO> toDto() {
        return modulo -> modelMapper.map( modulo, ModuloDTO.class );
    }

    @Override
    public DtoConverter<ModuloDTO, Modulo> toEntity() {
        return moduloDTO -> modelMapper.map(moduloDTO, Modulo.class);
    }
}
