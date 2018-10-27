package org.dougllasfps.application.model.controleacesso.dto;

import org.dougllasfps.application.model.BaseEntity;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Criado por dougllas.sousa em 24/10/2018.
 */
public class PermissaoDTO implements Serializable, BaseEntity {

    private Long id;

    @NotEmpty(message = "{campo.descricao.obrigatorio}")
    private String descricao;

    @NotEmpty(message = "{campo.label.obrigatorio}")
    private String label;

    private List<ModuloDTO> modulos;

    private List<ModuloDTO> modulosNaoAdicionados;

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
        if(modulos == null){
            modulos = new ArrayList<>();
        }
        return modulos;
    }

    public void setModulos(List<ModuloDTO> modulos) {
        this.modulos = modulos;
    }

    public List<ModuloDTO> getModulosNaoAdicionados() {
        if(modulosNaoAdicionados == null){
            modulosNaoAdicionados = new ArrayList<>();
        }
        return modulosNaoAdicionados;
    }

    public void setModulosNaoAdicionados(List<ModuloDTO> modulosNaoAdicionados) {
        this.modulosNaoAdicionados = modulosNaoAdicionados;
    }
}