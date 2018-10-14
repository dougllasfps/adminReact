package org.dougllasfps.application.model;

/**
 * Criado por dougllas.sousa em 10/10/2018.
 */
public interface BaseEntity {

    Long getId();

    default boolean isPersisted(){
        return getId() != null;
    }
}
