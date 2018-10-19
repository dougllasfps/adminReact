package org.dougllasfps.application.api.resource;


import org.dougllasfps.application.api.ResponseData;
import org.dougllasfps.application.model.controleacesso.Permissao;
import org.dougllasfps.application.service.PermissaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}