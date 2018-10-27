package org.dougllasfps.application.repository;

import org.dougllasfps.application.model.controleacesso.Permissao;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

/**
 * Criado por dougllas.sousa em 09/10/2018.
 */
public interface PermissaoRepository extends FullRepository<Permissao> {

    boolean existsByLabel(String label);

    boolean existsByDescricao(String descricao);

    boolean existsByLabelOrDescricao(String label, String descricao);

    @Query("select p from Permissao p left join fetch p.modulos where p.id = :id ")
    Optional<Permissao> findOneByIdFetchModulos(@Param("id") Long id);
}