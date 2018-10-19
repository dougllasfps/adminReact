package org.dougllasfps.application.model.controleacesso;

import org.dougllasfps.application.model.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Entity
@Table(name = "modulo", schema = "controle_acesso")
public class Modulo implements Serializable, BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    @NotEmpty(message = "{campo.descricao.obrigatorio}")
    private String descricao;

    @Column
    @NotEmpty(message = "{campo.label.obrigatorio}")
    private String label;

    public Modulo() {
    }

    public Modulo(String descricao, String label) {
        this.descricao = descricao;
        this.label = label;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getLabel() {
        return this.label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (!(object instanceof Modulo)) return false;

        Modulo modulo = (Modulo) object;

        if (getId() != null ? !getId().equals(modulo.getId()) : modulo.getId() != null) return false;
        if (getDescricao() != null ? !getDescricao().equals(modulo.getDescricao()) : modulo.getDescricao() != null)
            return false;
        return getLabel() != null ? getLabel().equals(modulo.getLabel()) : modulo.getLabel() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getDescricao() != null ? getDescricao().hashCode() : 0);
        result = 31 * result + (getLabel() != null ? getLabel().hashCode() : 0);
        return result;
    }

    public String toString() {
        return "Module [id=" + this.id + ", description=" + this.descricao + ", label=" + this.label + "]";
    }
}
