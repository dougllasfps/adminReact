package org.dougllasfps.application.api.resource;

import org.dougllasfps.application.api.ResponseData;
import org.dougllasfps.application.model.controleacesso.Modulo;
import org.dougllasfps.application.service.ModuloService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Criado por dougllas.sousa em 19/10/2018.
 */

@RestController
@RequestMapping("/api/modulos")
public class ModuloResource extends CrudResource<Modulo, ModuloService>{

    @GetMapping("/find")
    public ResponseEntity find( @RequestParam("descricao") String descricao, @RequestParam("label") String label ){
        List<Modulo> result = getService().find(new Modulo(descricao, label));

        if(result.isEmpty()){
            return new ResponseEntity(ResponseData.ofWarning("Nenhum item encontrado."), HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(ResponseData.of(result));
    }
}
