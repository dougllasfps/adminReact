package org.dougllasfps.application.api.resource;


import org.dougllasfps.application.api.ResponseData;
import org.dougllasfps.application.model.controleacesso.Permissao;
import org.dougllasfps.application.service.PermissaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/permissoes")
public class PermissaoResource extends CrudResource<Permissao, PermissaoService>{

    @GetMapping("/find")
    public ResponseEntity find( @RequestParam("descricao") String descricao, @RequestParam("label") String label){
        List<Permissao> result = getService().find(new Permissao(descricao, label));

        if(result.isEmpty()){
            return new ResponseEntity(ResponseData.ofWarning("Nenhum item encontrado."), HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(ResponseData.of(result));
    }

    @GetMapping("/{id}/modulos")
    public ResponseEntity findModulos(@PathVariable("id") Long id){
        Optional<Permissao> entity = getService().find(id);

        if(!entity.isPresent()){
            return ResponseEntity.badRequest().body(ResponseData.ofError("Entidade não encontrada para o id passado."));
        }

        return ResponseEntity.ok(ResponseData.of(getService().obterModulos(entity.get())));
    }
}