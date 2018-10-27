package org.dougllasfps.application.model.controleacesso.dto;

import org.dougllasfps.application.model.BaseEntity;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

public class GrupoDTO implements BaseEntity {

    private Long id;

    @NotEmpty(message = "{campo.label.obrigatorio}")
    private String label;

    @NotEmpty(message = "{campo.descricao.obrigatorio}")
    private String descricao;
    private Integer nivel;

    @NotNull(message = "{campo.modulo.obrigatorio}")
    private ModuloDTO modulo;

    @NotEmpty.List(@NotEmpty(message = "campo.permissoes.obrigatorio"))
    private List<PermissaoDTO> permissoes;

    private List<ModuloDTO> modulosDisponiveis;

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

    public List<ModuloDTO> getModulosDisponiveis() {
        return modulosDisponiveis;
    }

    public void setModulosDisponiveis(List<ModuloDTO> modulosDisponiveis) {
        this.modulosDisponiveis = modulosDisponiveis;
    }
}
