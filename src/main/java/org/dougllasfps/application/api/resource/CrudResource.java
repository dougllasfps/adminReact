package org.dougllasfps.application.api.resource;


import org.dougllasfps.application.api.ResponseData;
import org.dougllasfps.application.exception.ValidationException;
import org.dougllasfps.application.model.BaseEntity;
import org.dougllasfps.application.model.converter.generic.RequestResponseConverter;
import org.dougllasfps.application.service.generic.AbstractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

public class CrudResource<T extends BaseEntity, S extends AbstractService, C extends RequestResponseConverter> {

    @Autowired
    private S service;

    @Autowired
    private C dtoConverter;

    protected S getService() {
        return service;
    }

    @GetMapping
    public ResponseEntity<ResponseData> findAll(){
        List all =  getDtoConverter().toDto().convert(service.findAll());
        return ResponseEntity.ok(ResponseData.of(all));
    }

    @PostMapping
    public ResponseEntity<ResponseData> save( @RequestBody @Valid T entity, BindingResult bindingResult){

        Optional<ResponseEntity> beanValidationErrors = applyBeanValidation(bindingResult);

        if (beanValidationErrors.isPresent()){
            return beanValidationErrors.get();
        }

        try {

            T model = (T) getDtoConverter().toEntity().convert(entity);
            Object savedOne = service.save( model );
            savedOne = getDtoConverter().toDto().convert(savedOne);
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
            ResponseData responseData = ResponseData.of("Entidade não encontrada para o id " + id);
            return new ResponseEntity<>(responseData, HttpStatus.NOT_FOUND);
        }

        try {

            T model = (T) getDtoConverter().toEntity().convert(entity);
            Object updatedOne = service.update( model );
            updatedOne = getDtoConverter().toDto().convert(updatedOne);
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

    public RequestResponseConverter getDtoConverter(){
        return dtoConverter;
    }
}