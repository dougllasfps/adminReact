package org.dougllasfps.application.model.controleacesso;

import org.dougllasfps.application.model.BaseEntity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Criado por dougllas.sousa em 09/10/2018.
 */

@Entity
@Table(name = "grupo", schema = "controle_acesso")
public class Grupo implements Serializable, BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "label")
    private String label;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "nivel")
    private Integer nivel;

    @ManyToOne
    @JoinColumn(name = "fk_modulo")
    private Modulo modulo;

    @OneToMany( mappedBy = "grupo")
    private List<GrupoPermissao> grupoPermissaoList;

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

    public Modulo getModulo() {
        return modulo;
    }

    public void setModulo(Modulo modulo) {
        this.modulo = modulo;
    }

    public List<GrupoPermissao> getGrupoPermissaoList() {
        return grupoPermissaoList;
    }

    public void setGrupoPermissaoList(List<GrupoPermissao> grupoPermissaoList) {
        this.grupoPermissaoList = grupoPermissaoList;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (!(object instanceof Grupo)) return false;

        Grupo grupo = (Grupo) object;

        if (getId() != null ? !getId().equals(grupo.getId()) : grupo.getId() != null) return false;
        if (getLabel() != null ? !getLabel().equals(grupo.getLabel()) : grupo.getLabel() != null) return false;
        if (getDescricao() != null ? !getDescricao().equals(grupo.getDescricao()) : grupo.getDescricao() != null)
            return false;
        if (getNivel() != null ? !getNivel().equals(grupo.getNivel()) : grupo.getNivel() != null) return false;
        if (getModulo() != null ? !getModulo().equals(grupo.getModulo()) : grupo.getModulo() != null) return false;
        return true;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getLabel() != null ? getLabel().hashCode() : 0);
        result = 31 * result + (getDescricao() != null ? getDescricao().hashCode() : 0);
        result = 31 * result + (getNivel() != null ? getNivel().hashCode() : 0);
        result = 31 * result + (getModulo() != null ? getModulo().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Grupo{" +
                "id=" + id +
                ", label='" + label + '\'' +
                ", descricao='" + descricao + '\'' +
                ", nivel=" + nivel +
                ", modulo=" + modulo +
                ", grupoPermissaoList=" + grupoPermissaoList +
                '}';
    }
}
