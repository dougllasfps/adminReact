package org.dougllasfps.application.api.resource;


import org.dougllasfps.application.api.ResponseData;
import org.dougllasfps.application.exception.ValidationException;
import org.dougllasfps.application.model.BaseEntity;
import org.dougllasfps.application.service.generic.AbstractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

public class CrudResource<T extends BaseEntity, S extends AbstractService> {

    @Autowired
    private S service;

    protected S getService() {
        return service;
    }

    @GetMapping
    public ResponseEntity<ResponseData> findAll(){
        return ResponseEntity.ok(ResponseData.of(service.findAll()));
    }

    @PostMapping
    public ResponseEntity<ResponseData> save( @RequestBody @Valid T entity, BindingResult bindingResult){

        Optional<ResponseEntity> beanValidationErrors = applyBeanValidation(bindingResult);

        if (beanValidationErrors.isPresent()){
            return beanValidationErrors.get();
        }

        try {
            T savedOne = (T) service.save(entity);
            return new ResponseEntity<>( ResponseData.of(savedOne), HttpStatus.CREATED );
        } catch (ValidationException e) {
            return ResponseEntity.badRequest().body(ResponseData.of(e));
        }
    }

    protected Optional<ResponseEntity> applyBeanValidation( BindingResult bindingResult ) {
        ValidationException validationException = new ValidationException( bindingResult );

        if(validationException.hasErrors()){
            ResponseEntity<ResponseData> response = ResponseEntity.badRequest().body(ResponseData.of(validationException));
            return Optional.of(response);
        }

        return Optional.empty();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseData> update( @PathVariable("id") Long id, @RequestBody @Valid T entity, BindingResult bindingResult ){

        Optional<ResponseEntity> beanValidationErrors = applyBeanValidation( bindingResult );

        if (beanValidationErrors.isPresent()){
            return beanValidationErrors.get();
        }

        if(!service.exists(id)){
            ResponseData responseData = ResponseData.of("Permissão não encontrada para o id " + id);
            return new ResponseEntity<>(responseData, HttpStatus.NOT_FOUND);
        }

        try {
            T updatedOne = (T) service.update(entity);
            return ResponseEntity.ok(ResponseData.of(updatedOne));
        } catch (ValidationException e) {
            return ResponseEntity.badRequest().body(ResponseData.of(e));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete( @PathVariable("id") Long id ){
        Optional<T> entity = service.find(id);

        if(entity.isPresent()){
            try {
                service.delete(entity.get());
                return new ResponseEntity( HttpStatus.NO_CONTENT );
            } catch (Exception e) {
                return ResponseEntity.badRequest().body(ResponseData.ofError(e.getMessage()));
            }
        }

        return ResponseEntity.badRequest().body(ResponseData.ofError("Entidade não encontrada para o id passado."));
    }
}