package org.dougllasfps.application.model.controleacesso;

import org.dougllasfps.application.model.BaseEntity;

import javax.persistence.*;
import java.util.ArrayList;
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

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "label")
    private String label;

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
        if(modulos == null)
            modulos = new ArrayList<>();
        return modulos;
    }

    public void setModulos(List<ModuloPermissao> modulos) {
        this.modulos = modulos;
    }
}