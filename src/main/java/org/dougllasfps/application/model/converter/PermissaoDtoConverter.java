package org.dougllasfps.application.model.converter;

import org.dougllasfps.application.model.controleacesso.Permissao;
import org.dougllasfps.application.model.controleacesso.dto.PermissaoDTO;
import org.dougllasfps.application.model.converter.generic.DtoConverter;
import org.dougllasfps.application.model.converter.generic.RequestResponseConverter;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Criado por dougllas.sousa em 24/10/2018.
 */

@Component
public class PermissaoDtoConverter implements RequestResponseConverter<Permissao, PermissaoDTO> {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ModuloDtoConverter moduloDtoConverter;

    @Override
    public DtoConverter<PermissaoDTO, Permissao> toEntity() {
        return permissao -> modelMapper.map( permissao, Permissao.class );
    }

    @Override
    public DtoConverter<Permissao, PermissaoDTO> toDto() {
        return permissao -> {
            PermissaoDTO dto = modelMapper.map(permissao, PermissaoDTO.class);
//            List<Modulo> modulos = permissao.getModulos().stream().map(ModuloPermissao::getModulo).collect(Collectors.toList());
//            dto.setModulos( moduloDtoConverter.toDto().convert(modulos) );
            return dto;
        };
    }
}
