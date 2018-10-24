package org.dougllasfps.application.model.controleacesso.dto;

import java.io.Serializable;
import java.util.List;

/**
 * Criado por dougllas.sousa em 24/10/2018.
 */
public class PermissaoDTO implements Serializable{

    private Long id;
    private String descricao;
    private String label;
    private List<ModuloDTO> modulos;

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

    public List<ModuloDTO> getModulos() {
        return modulos;
    }

    public void setModulos(List<ModuloDTO> modulos) {
        this.modulos = modulos;
    }
}