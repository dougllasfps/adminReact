package org.dougllasfps.application.model.controleacesso;

import org.dougllasfps.application.model.BaseEntity;
//import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * Criado por dougllas.sousa em 09/10/2018.
 */

@Entity
@Table( name = "permissao",  schema = "controle_acesso")
public class Permissao
        implements
//        GrantedAuthority,
        BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "{campo.descricao.obrigatorio}")
    @NotEmpty(message = "{campo.descricao.obrigatorio}")
    @Column(name = "descricao")
    private String descricao;

    @NotNull(message = "{campo.label.obrigatorio}")
    @NotEmpty(message = "{campo.label.obrigatorio}")
    @Column(name = "label")
    private String label;

    public Permissao() {}

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

    public String toString() {
        return "Permissão [id=" + this.id + ", descricao=" + this.descricao + "]";
    }

//    @Override
    public String getAuthority() {
        return getLabel();
    }
}