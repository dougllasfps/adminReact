package org.dougllasfps.application.model.controleacesso.dto;

import javax.validation.constraints.NotEmpty;
import java.util.List;

public class GrupoDTO {

    private Long id;

    @NotEmpty(message = "{campo.label.obrigatorio}")
    private String label;

    @NotEmpty(message = "{campo.descricao.obrigatorio}")
    private String descricao;
    private Integer nivel;
    private ModuloDTO modulo;
    private List<PermissaoDTO> permissoes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getNivel() {
        return nivel;
    }

    public void setNivel(Integer nivel) {
        this.nivel = nivel;
    }

    public ModuloDTO getModulo() {
        return modulo;
    }

    public void setModulo(ModuloDTO modulo) {
        this.modulo = modulo;
    }

    public List<PermissaoDTO> getPermissoes() {
        return permissoes;
    }

    public void setPermissoes(List<PermissaoDTO> permissoes) {
        this.permissoes = permissoes;
    }
}
