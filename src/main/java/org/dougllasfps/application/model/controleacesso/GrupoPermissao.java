package org.dougllasfps.application.model.controleacesso;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "grupo_permissao", schema = "controle_acesso")
public class GrupoPermissao implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Long id;

    @ManyToOne
    @JoinColumn(name = "fk_grupo")
    private Grupo grupo;

    @ManyToOne
    @JoinColumn(name = "fk_permissao")
    private Permissao permissao;

    public GrupoPermissao() {
    }

    public GrupoPermissao(Permissao permissao) {
        this.permissao = permissao;
    }

    public GrupoPermissao(Grupo grupo, Permissao permissao) {
        this.grupo = grupo;
        this.permissao = permissao;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Grupo getGrupo() {
        return this.grupo;
    }

    public void setGrupo(Grupo grupo) {
        this.grupo = grupo;
    }

    public Permissao getPermissao() {
        return this.permissao;
    }

    public void setPermissao(Permissao permissao) {
        this.permissao = permissao;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (!(object instanceof GrupoPermissao)) return false;

        GrupoPermissao that = (GrupoPermissao) object;

        if (getId() != null ? !getId().equals(that.getId()) : that.getId() != null) return false;
        if (getGrupo() != null ? !getGrupo().equals(that.getGrupo()) : that.getGrupo() != null) return false;
        return getPermissao() != null ? getPermissao().equals(that.getPermissao()) : that.getPermissao() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getGrupo() != null ? getGrupo().hashCode() : 0);
        result = 31 * result + (getPermissao() != null ? getPermissao().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "GrupoPermissao{" +
                "id=" + id +
                ", grupo=" + grupo +
                ", permissao=" + permissao +
                '}';
    }
}
