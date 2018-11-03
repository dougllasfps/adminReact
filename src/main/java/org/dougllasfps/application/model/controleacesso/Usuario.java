package org.dougllasfps.application.model.controleacesso;

import org.dougllasfps.application.model.BaseEntity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "usuario", schema = "controle_acesso")
public class Usuario implements Serializable, BaseEntity {

    @Id
    @Column
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String login;

    @Column
    private String senha;

    @Column
    private String nome; 

    @Column
    private String email;

    @Column(name = "hash_recupera_senha" )
    private String hashRecuperacaoSenha;

    @ManyToMany
    @JoinTable(
        name = "usuario_grupo",
        schema = "controle_acesso",
        joinColumns = @JoinColumn(name = "cd_usuario", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "cd_grupo", referencedColumnName = "id")
    )
    private Set<Grupo> grupos;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHashRecuperacaoSenha() {
        return hashRecuperacaoSenha;
    }

    public void setHashRecuperacaoSenha(String hashRecuperacaoSenha) {
        this.hashRecuperacaoSenha = hashRecuperacaoSenha;
    }

    public Set<Grupo> getGrupos() {
        return grupos;
    }

    public void setGrupos(Set<Grupo> grupos) {
        this.grupos = grupos;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Usuario usuario = (Usuario) o;

        if (id != null ? !id.equals(usuario.id) : usuario.id != null) return false;
        if (login != null ? !login.equals(usuario.login) : usuario.login != null) return false;
        if (senha != null ? !senha.equals(usuario.senha) : usuario.senha != null) return false;
        if (nome != null ? !nome.equals(usuario.nome) : usuario.nome != null) return false;
        if (email != null ? !email.equals(usuario.email) : usuario.email != null) return false;
        return hashRecuperacaoSenha != null ? hashRecuperacaoSenha.equals(usuario.hashRecuperacaoSenha) : usuario.hashRecuperacaoSenha == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (login != null ? login.hashCode() : 0);
        result = 31 * result + (senha != null ? senha.hashCode() : 0);
        result = 31 * result + (nome != null ? nome.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (hashRecuperacaoSenha != null ? hashRecuperacaoSenha.hashCode() : 0);
        return result;
    }
}