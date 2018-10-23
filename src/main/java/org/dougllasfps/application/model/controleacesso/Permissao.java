package org.dougllasfps.application.model.controleacesso;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.dougllasfps.application.model.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;

//import org.springframework.security.core.GrantedAuthority;

/**
 * Criado por dougllas.sousa em 09/10/2018.
 */

@Entity
@Table( name = "permissao",  schema = "controle_acesso")
public class Permissao implements BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "{campo.descricao.obrigatorio}")
    @Column(name = "descricao")
    private String descricao;

    @NotEmpty(message = "{campo.label.obrigatorio}")
    @Column(name = "label")
    private String label;

    @JsonIgnore
    @OneToMany(mappedBy = "permissao", fetch = FetchType.LAZY)
    private List<ModuloPermissao> modulos;

    public Permissao(String descricao, String label) {
        this.descricao = descricao;
        this.label = label;
    }

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

    public List<ModuloPermissao> getModulos() {
        return modulos;
    }

    public void setModulos(List<ModuloPermissao> modulos) {
        this.modulos = modulos;
    }
}