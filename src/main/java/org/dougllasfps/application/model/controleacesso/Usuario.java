package org.dougllasfps.application.model.controleacesso;

import org.dougllasfps.application.model.controleacesso.dto.UsuarioDTO;
import org.dougllasfps.application.model.corporativo.Pessoa;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "usuario", schema = "controle_acesso")
public class Usuario implements Serializable {

    @Id
    @Column
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String login;

    @Column
    private String senha;

    @Column(name = "hash_recupera_senha" )
    private String hashRecuperacaoSenha;

    @ManyToOne
    @JoinColumn( name = "fk_modulo", referencedColumnName = "id")
    private Modulo modulo;

    @ManyToOne
    @JoinColumn( name = "fk_pessoa", referencedColumnName = "id")
    private Pessoa pessoa;

    @Transient
    private UsuarioDTO dto;

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

    public String getHashRecuperacaoSenha() {
        return hashRecuperacaoSenha;
    }

    public void setHashRecuperacaoSenha(String hashRecuperacaoSenha) {
        this.hashRecuperacaoSenha = hashRecuperacaoSenha;
    }

    public Modulo getModulo() {
        return modulo;
    }

    public void setModulo(Modulo modulo) {
        this.modulo = modulo;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    public UsuarioDTO getDto() {
        if(dto == null)
            dto = new UsuarioDTO(this);
        return dto;
    }

    public void setDto(UsuarioDTO dto) {
        this.dto = dto;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (!(object instanceof Usuario)) return false;

        Usuario usuario = (Usuario) object;

        if (getId() != null ? !getId().equals(usuario.getId()) : usuario.getId() != null) return false;
        if (getLogin() != null ? !getLogin().equals(usuario.getLogin()) : usuario.getLogin() != null) return false;
        if (getSenha() != null ? !getSenha().equals(usuario.getSenha()) : usuario.getSenha() != null) return false;
        if (getHashRecuperacaoSenha() != null ? !getHashRecuperacaoSenha().equals(usuario.getHashRecuperacaoSenha()) : usuario.getHashRecuperacaoSenha() != null)
            return false;
        if (getModulo() != null ? !getModulo().equals(usuario.getModulo()) : usuario.getModulo() != null) return false;
        if (getPessoa() != null ? !getPessoa().equals(usuario.getPessoa()) : usuario.getPessoa() != null) return false;
        return getDto() != null ? getDto().equals(usuario.getDto()) : usuario.getDto() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getLogin() != null ? getLogin().hashCode() : 0);
        result = 31 * result + (getSenha() != null ? getSenha().hashCode() : 0);
        result = 31 * result + (getHashRecuperacaoSenha() != null ? getHashRecuperacaoSenha().hashCode() : 0);
        result = 31 * result + (getModulo() != null ? getModulo().hashCode() : 0);
        result = 31 * result + (getPessoa() != null ? getPessoa().hashCode() : 0);
        result = 31 * result + (getDto() != null ? getDto().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", login='" + login + '\'' +
                ", senha='" + senha + '\'' +
                ", hashRecuperacaoSenha='" + hashRecuperacaoSenha + '\'' +
                ", modulo=" + modulo +
                ", pessoa=" + pessoa +
                ", dto=" + dto +
                '}';
    }
}