package org.dougllasfps.application.api.resource;


import org.dougllasfps.application.api.ResponseData;
import org.dougllasfps.application.model.controleacesso.Modulo;
import org.dougllasfps.application.model.controleacesso.Permissao;
import org.dougllasfps.application.model.controleacesso.dto.PermissaoDTO;
import org.dougllasfps.application.model.converter.ModuloDtoConverter;
import org.dougllasfps.application.model.converter.PermissaoDtoConverter;
import org.dougllasfps.application.service.PermissaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/permissoes")
public class PermissaoResource extends CrudResource<PermissaoDTO, PermissaoService, PermissaoDtoConverter>{

    @Autowired
    private PermissaoDtoConverter dtoConverter;
    @Autowired
    private ModuloDtoConverter moduloDtoConverter;

    @GetMapping("/find")
    public ResponseEntity find( @RequestParam("descricao") String descricao, @RequestParam("label") String label){
        List<Permissao> result = getService().find(new Permissao(descricao, label));

        if(result.isEmpty()){
            return new ResponseEntity(ResponseData.ofWarning("Nenhum item encontrado."), HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(ResponseData.of(dtoConverter.toDto().convert(result)));
    }

    @GetMapping("/{id}")
    public ResponseEntity loadEntityForm(@PathVariable("id") Long id){
        Optional<Permissao> entity = getService().findAndLoadById(id);

        if(!entity.isPresent()){
            return ResponseEntity.badRequest().body(ResponseData.ofError("Entidade não encontrada para o id passado."));
        }

        Permissao permissao = entity.get();

        PermissaoDTO dto = getDtoConverter().toDto().convert(permissao);
        List<Modulo> modulosDisponiveis = getService().obterModulosNaoAssociados(permissao);
        dto.setModulosNaoAdicionados(moduloDtoConverter.toDto().convert(modulosDisponiveis));

        return ResponseEntity.ok(ResponseData.of(dto));
    }

    @Override
    public PermissaoDtoConverter getDtoConverter() {
        return dtoConverter;
    }
}