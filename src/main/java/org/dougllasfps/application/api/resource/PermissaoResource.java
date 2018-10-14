package org.dougllasfps.application.api.resource;


import org.dougllasfps.application.api.ResponseData;
import org.dougllasfps.application.exception.ValidationException;
import org.dougllasfps.application.model.controleacesso.Permissao;
import org.dougllasfps.application.service.PermissaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/permissoes")
public class PermissaoResource {

    @Autowired
    private PermissaoService service;

    @GetMapping
    public ResponseEntity<ResponseData> findAll(){
        return ResponseEntity.ok(ResponseData.of(service.findAll()));
    }

    @PostMapping
    public ResponseEntity<ResponseData> save( @RequestBody @Valid Permissao permissao, BindingResult bindingResult){

        ValidationException validationException = new ValidationException( bindingResult );
        if(validationException.hasErrors()){
            return ResponseEntity.badRequest().body(ResponseData.of(validationException));
        }

        try {
            Permissao savedOne = service.save(permissao);
            return new ResponseEntity<>(ResponseData.of(savedOne), HttpStatus.CREATED);
        } catch (ValidationException e) {
            return ResponseEntity.badRequest().body(ResponseData.of(e));
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseData> update( @PathVariable("id") Long id, @RequestBody @Valid Permissao permissao, BindingResult bindingResult ){

        ValidationException validationException = new ValidationException( bindingResult );
        if(validationException.hasErrors()){
            return ResponseEntity.badRequest().body(ResponseData.of(validationException));
        }

        if(!service.exists(id)){
            ResponseData responseData = ResponseData.of("Permissão não encontrada para o id " + id);
            return new ResponseEntity<>(responseData, HttpStatus.NOT_FOUND);
        }

        try {
            permissao.setId(id);
            Permissao updatedOne = service.update(permissao);
            return ResponseEntity.ok(ResponseData.of(updatedOne));
        } catch (ValidationException e) {
            return ResponseEntity.badRequest().body(ResponseData.of(e));
        }
    }
}