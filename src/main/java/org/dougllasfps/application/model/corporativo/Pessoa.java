package org.dougllasfps.application.model.corporativo;

import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "pessoa", schema = "corporativo")
public class Pessoa implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "nome_social")
    private String nomeSocial;

    @Column(name = "email")
    private String email;

    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    @Column(name = "dt_cadastro")
    private LocalDateTime dataCadastro;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNomeSocial() {
        return nomeSocial;
    }

    public void setNomeSocial(String nomeSocial) {
        this.nomeSocial = nomeSocial;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDateTime dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    @Override
    public String toString() {
        return "Pessoa{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", nomeSocial='" + nomeSocial + '\'' +
                ", email='" + email + '\'' +
                ", dataCadastro=" + dataCadastro +
                '}';
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (!(object instanceof Pessoa)) return false;

        Pessoa pessoa = (Pessoa) object;

        if (getId() != null ? !getId().equals(pessoa.getId()) : pessoa.getId() != null) return false;
        if (getNome() != null ? !getNome().equals(pessoa.getNome()) : pessoa.getNome() != null) return false;
        if (getNomeSocial() != null ? !getNomeSocial().equals(pessoa.getNomeSocial()) : pessoa.getNomeSocial() != null)
            return false;
        if (getEmail() != null ? !getEmail().equals(pessoa.getEmail()) : pessoa.getEmail() != null) return false;
        return getDataCadastro() != null ? getDataCadastro().equals(pessoa.getDataCadastro()) : pessoa.getDataCadastro() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getNome() != null ? getNome().hashCode() : 0);
        result = 31 * result + (getNomeSocial() != null ? getNomeSocial().hashCode() : 0);
        result = 31 * result + (getEmail() != null ? getEmail().hashCode() : 0);
        result = 31 * result + (getDataCadastro() != null ? getDataCadastro().hashCode() : 0);
        return result;
    }
}