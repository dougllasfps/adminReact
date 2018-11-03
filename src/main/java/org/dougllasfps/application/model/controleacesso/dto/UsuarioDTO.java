package org.dougllasfps.application.model.controleacesso.dto;

import org.dougllasfps.application.model.controleacesso.Usuario;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;

/**
 * Criado por dougllas.sousa em 09/10/2018.
 */
public class UsuarioDTO implements Serializable {

    @NotEmpty
    private String login;
    @NotEmpty
    private String nome;
    @NotEmpty
    private String senha;
    private String senhaRepeat;
    @NotEmpty
    private String email;
    private String hashRecuperacaoSenha;
    private List<GrupoDTO> gruposSelecionados;
    private List<GrupoDTO> gruposDisponiveis;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getSenhaRepeat() {
        return senhaRepeat;
    }

    public void setSenhaRepeat(String senhaRepeat) {
        this.senhaRepeat = senhaRepeat;
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

    public List<GrupoDTO> getGruposSelecionados() {
        return gruposSelecionados;
    }

    public void setGruposSelecionados(List<GrupoDTO> gruposSelecionados) {
        this.gruposSelecionados = gruposSelecionados;
    }

    public List<GrupoDTO> getGruposDisponiveis() {
        return gruposDisponiveis;
    }

    public void setGruposDisponiveis(List<GrupoDTO> gruposDisponiveis) {
        this.gruposDisponiveis = gruposDisponiveis;
    }
}
