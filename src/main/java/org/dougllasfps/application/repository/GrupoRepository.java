package org.dougllasfps.application.repository;

import org.dougllasfps.application.model.controleacesso.Grupo;
import org.dougllasfps.application.model.controleacesso.Permissao;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

/**
 * Criado por dougllas.sousa em 09/10/2018.
 */
public interface GrupoRepository extends FullRepository<Grupo> {

    List<Grupo> findAllByPermissoesNotIn(Iterable<Permissao> permissoes);

    @Query(" select g from Grupo g left join fetch g.permissoes where g.id = :id ")
    Optional<Grupo> findOneFetchPermissoes(@Param("id") Long id);
}