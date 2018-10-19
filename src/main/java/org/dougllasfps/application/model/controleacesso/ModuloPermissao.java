package org.dougllasfps.application.model.controleacesso;

import org.dougllasfps.application.model.BaseEntity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Criado por dougllas.sousa em 19/10/2018.
 */

@Entity
@Table(name = "modulo_permissao", schema = "controle_acesso")
public class ModuloPermissao implements Serializable, BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cd_modulo")
    private Modulo modulo;

    @ManyToOne
    @JoinColumn(name = "cd_permissao")
    private Permissao permissao;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Modulo getModulo() {
        return modulo;
    }

    public void setModulo(Modulo modulo) {
        this.modulo = modulo;
    }

    public Permissao getPermissao() {
        return permissao;
    }

    public void setPermissao(Permissao permissao) {
        this.permissao = permissao;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (!(object instanceof ModuloPermissao)) return false;

        ModuloPermissao that = (ModuloPermissao) object;

        if (getId() != null ? !getId().equals(that.getId()) : that.getId() != null) return false;
        if (getModulo() != null ? !getModulo().equals(that.getModulo()) : that.getModulo() != null) return false;
        return getPermissao() != null ? getPermissao().equals(that.getPermissao()) : that.getPermissao() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getModulo() != null ? getModulo().hashCode() : 0);
        result = 31 * result + (getPermissao() != null ? getPermissao().hashCode() : 0);
        return result;
    }
}