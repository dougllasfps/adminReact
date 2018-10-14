package org.dougllasfps.application.model.controleacesso;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(
    name = "grupo_usuario",
    schema = "controle_acesso"
)
public class GrupoUsuario implements Serializable {

    @Id
    @Column
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn( name = "fk_grupo", referencedColumnName = "id")
    private Grupo grupo;

    @ManyToOne
    @JoinColumn( name = "fk_usuario", referencedColumnName = "id")
    private Usuario usuario;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Grupo getGrupo() {
        return grupo;
    }

    public void setGrupo(Grupo grupo) {
        this.grupo = grupo;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (!(object instanceof GrupoUsuario)) return false;

        GrupoUsuario that = (GrupoUsuario) object;

        if (getId() != null ? !getId().equals(that.getId()) : that.getId() != null) return false;
        if (getGrupo() != null ? !getGrupo().equals(that.getGrupo()) : that.getGrupo() != null) return false;
        return getUsuario() != null ? getUsuario().equals(that.getUsuario()) : that.getUsuario() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getGrupo() != null ? getGrupo().hashCode() : 0);
        result = 31 * result + (getUsuario() != null ? getUsuario().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "GrupoUsuario{" +
                "id=" + id +
                ", grupo=" + grupo +
                ", usuario=" + usuario +
                '}';
    }
}
