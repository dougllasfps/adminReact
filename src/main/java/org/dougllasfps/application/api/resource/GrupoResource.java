package org.dougllasfps.application.api.resource;


import org.dougllasfps.application.api.ResponseData;
import org.dougllasfps.application.model.controleacesso.Grupo;
import org.dougllasfps.application.model.controleacesso.Modulo;
import org.dougllasfps.application.model.controleacesso.dto.GrupoDTO;
import org.dougllasfps.application.model.converter.DefaultGrupoDtoConverter;
import org.dougllasfps.application.model.converter.ModuloDtoConverter;
import org.dougllasfps.application.service.GrupoService;
import org.dougllasfps.application.service.ModuloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/grupos")
public class GrupoResource extends CrudResource<GrupoDTO, GrupoService, DefaultGrupoDtoConverter>{

    @Autowired
    private ModuloService moduloService;
    @Autowired
    private ModuloDtoConverter moduloDtoConverter;

    @GetMapping("/find")
    public ResponseEntity find( @RequestParam("descricao") String descricao, @RequestParam("label") String label){
        return null;
    }

    @GetMapping("/novo")
    public ResponseEntity novo(){
        GrupoDTO dto = new GrupoDTO();
        List<Modulo> allModulos = moduloService.findAll();
        dto.setModulosDisponiveis(moduloDtoConverter.toDto().convert(allModulos));
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/{id}")
    public ResponseEntity findOne(@PathVariable("id") Long id){
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
    public DefaultGrupoDtoConverter getDtoConverter() {
        return dtoConverter;
    }
}