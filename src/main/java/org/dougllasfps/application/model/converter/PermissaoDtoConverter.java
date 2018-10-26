package org.dougllasfps.application.model.converter;

import org.dougllasfps.application.model.controleacesso.Modulo;
import org.dougllasfps.application.model.controleacesso.ModuloPermissao;
import org.dougllasfps.application.model.controleacesso.Permissao;
import org.dougllasfps.application.model.controleacesso.dto.PermissaoDTO;
import org.dougllasfps.application.model.converter.generic.DtoConverter;
import org.dougllasfps.application.model.converter.generic.RequestResponseConverter;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

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
        return dto -> {
            Permissao entity = modelMapper.map(dto, Permissao.class);
            entity.getModulos().clear();
            dto.getModulos().forEach( m  -> {
                ModuloPermissao moduloPermissao = new ModuloPermissao();
                moduloPermissao.setModulo(moduloDtoConverter.toEntity().convert(m));
                moduloPermissao.setPermissao(entity);
                entity.getModulos().add(moduloPermissao);
            });
            return entity;
        };
    }

    @Override
    public DtoConverter<Permissao, PermissaoDTO> toDto() {
        return permissao -> {
            PermissaoDTO dto = modelMapper.map(permissao, PermissaoDTO.class);
            List<Modulo> modulos = permissao.getModulos().stream().map(ModuloPermissao::getModulo).collect(Collectors.toList());
            dto.setModulos( moduloDtoConverter.toDto().convert(modulos) );
            return dto;
        };
    }
}
