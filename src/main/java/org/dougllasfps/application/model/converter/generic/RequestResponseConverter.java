package org.dougllasfps.application.model.converter.generic;

/**
 * Criado por dougllas.sousa em 24/10/2018.
 */
public interface RequestResponseConverter<Response,Request> {

    DtoConverter<Response,Request> toDto();

    DtoConverter<Request,Response> toEntity();
}
