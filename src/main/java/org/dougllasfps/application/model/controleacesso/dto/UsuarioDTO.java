package org.dougllasfps.application.model.controleacesso.dto;

import org.dougllasfps.application.model.controleacesso.Usuario;

import java.util.Objects;

/**
 * Criado por dougllas.sousa em 09/10/2018.
 */
public class UsuarioDTO {

    private Usuario usuario;
    private String senhaRedigitada;
    private String novaSenha;
    private String novaSenhaRedigitada;

    public UsuarioDTO(Usuario usuario) {
        Objects.requireNonNull(usuario);
        this.usuario = usuario;
    }

    public String getSenhaRedigitada() {
        return senhaRedigitada;
    }

    public void setSenhaRedigitada(String senhaRedigitada) {
        this.senhaRedigitada = senhaRedigitada;
    }

    public String getNovaSenha() {
        return novaSenha;
    }

    public void setNovaSenha(String novaSenha) {
        this.novaSenha = novaSenha;
    }

    public String getNovaSenhaRedigitada() {
        return novaSenhaRedigitada;
    }

    public void setNovaSenhaRedigitada(String novaSenhaRedigitada) {
        this.novaSenhaRedigitada = novaSenhaRedigitada;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (!(object instanceof UsuarioDTO)) return false;

        UsuarioDTO that = (UsuarioDTO) object;

        if (usuario != null ? !usuario.equals(that.usuario) : that.usuario != null) return false;
        if (getSenhaRedigitada() != null ? !getSenhaRedigitada().equals(that.getSenhaRedigitada()) : that.getSenhaRedigitada() != null)
            return false;
        if (getNovaSenha() != null ? !getNovaSenha().equals(that.getNovaSenha()) : that.getNovaSenha() != null)
            return false;
        return getNovaSenhaRedigitada() != null ? getNovaSenhaRedigitada().equals(that.getNovaSenhaRedigitada()) : that.getNovaSenhaRedigitada() == null;
    }

    @Override
    public int hashCode() {
        int result = usuario != null ? usuario.hashCode() : 0;
        result = 31 * result + (getSenhaRedigitada() != null ? getSenhaRedigitada().hashCode() : 0);
        result = 31 * result + (getNovaSenha() != null ? getNovaSenha().hashCode() : 0);
        result = 31 * result + (getNovaSenhaRedigitada() != null ? getNovaSenhaRedigitada().hashCode() : 0);
        return result;
    }
}
