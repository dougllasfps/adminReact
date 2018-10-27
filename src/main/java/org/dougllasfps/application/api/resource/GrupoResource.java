package org.dougllasfps.application.api.resource;


import org.dougllasfps.application.api.ResponseData;
import org.dougllasfps.application.model.controleacesso.Grupo;
import org.dougllasfps.application.model.controleacesso.Modulo;
import org.dougllasfps.application.model.controleacesso.Permissao;
import org.dougllasfps.application.model.controleacesso.dto.GrupoDTO;
import org.dougllasfps.application.model.controleacesso.dto.PermissaoDTO;
import org.dougllasfps.application.model.converter.GrupoDtoConverter;
import org.dougllasfps.application.model.converter.ModuloDtoConverter;
import org.dougllasfps.application.model.converter.PermissaoDtoConverter;
import org.dougllasfps.application.service.GrupoService;
import org.dougllasfps.application.service.ModuloService;
import org.dougllasfps.application.service.PermissaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/grupos")
public class GrupoResource extends CrudResource<GrupoDTO, GrupoService, GrupoDtoConverter>{

    @Autowired
    private ModuloService moduloService;
    @Autowired
    private ModuloDtoConverter moduloDtoConverter;

    @GetMapping("/find")
    public ResponseEntity find( @RequestParam("descricao") String descricao, @RequestParam("label") String label){
        return null;
    }

    @GetMapping("/{id}")
    public ResponseEntity loadEntityForm(@PathVariable("id") Long id){
        Optional<Grupo> entity = getService().findAndLoadById(id);

        if(!entity.isPresent()){
            return ResponseEntity.badRequest().body(ResponseData.ofError("Entidade não encontrada para o id passado."));
        }

        Grupo grupo = entity.get();
        GrupoDTO dto = getDtoConverter().toDto().convert(grupo);

        List<Modulo> allModulos = moduloService.findAll();
        dto.setModulosDisponiveis(moduloDtoConverter.toDto().convert(allModulos));

        return ResponseEntity.ok(ResponseData.of(dto));
    }

    @Override
    public GrupoDtoConverter getDtoConverter() {
        return dtoConverter;
    }
}