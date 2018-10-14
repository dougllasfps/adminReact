package org.dougllasfps.application.api;

import org.dougllasfps.application.exception.ValidationException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class ResponseData {

    private Object data;
    private List<String> errors;

    public static ResponseData of(Object data){
        return new ResponseData(data);
    }

    public static ResponseData ofError(String error){
        List<String> errors = Arrays.asList(error);
        ResponseData responseData = new ResponseData();
        responseData.setErrors(errors);
        return responseData;
    }

    public static ResponseData of(ValidationException validationException){
        ResponseData r = new ResponseData();

        Optional.ofNullable(validationException).ifPresent( ve ->{
            ve.getErrors().forEach( e -> r.getErrors().add(e.getMessage()) );
        });

        return r;
    }

    public ResponseData() {
    }

    private ResponseData(Object data) {
        this.data = data;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public List<String> getErrors() {
        if(errors == null)
            errors = new ArrayList<>();
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }
}
