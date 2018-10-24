package org.dougllasfps.application.model.controleacesso.dto;

import org.dougllasfps.application.model.BaseEntity;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

/**
 * Criado por dougllas.sousa em 24/10/2018.
 */
public class ModuloDTO implements Serializable, BaseEntity {

    private Long id;

    @NotEmpty(message = "{campo.descricao.obrigatorio}")
    private String descricao;

    @NotEmpty(message = "{campo.label.obrigatorio}")
    private String label;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
}