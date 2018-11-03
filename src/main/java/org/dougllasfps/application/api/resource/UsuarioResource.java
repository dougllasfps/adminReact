package org.dougllasfps.application.api.resource;

import org.dougllasfps.application.model.controleacesso.dto.UsuarioDTO;
import org.dougllasfps.application.model.converter.SimpleGrupoDtoConverter;
import org.dougllasfps.application.model.converter.UsuarioDtoConverter;
import org.dougllasfps.application.service.GrupoService;
import org.dougllasfps.application.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioResource {

    @Autowired
    private UsuarioDtoConverter usuarioDtoConverter;

    @Autowired
    private SimpleGrupoDtoConverter grupoDtoConverter;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private GrupoService grupoService;

    @GetMapping
    public List<UsuarioDTO> findAll(){
        return usuarioDtoConverter.toDto().convert(usuarioService.findAll());
    }

    @GetMapping("/novo")
    public UsuarioDTO novo(){
        UsuarioDTO dto = new UsuarioDTO();
//        dto.setGruposDisponiveis();

        return dto;
    }

}