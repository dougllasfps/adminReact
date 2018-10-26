package org.dougllasfps.application.repository;

import org.dougllasfps.application.model.controleacesso.Modulo;
import org.dougllasfps.application.model.controleacesso.ModuloPermissao;
import org.dougllasfps.application.model.controleacesso.Permissao;

import java.util.List;
import java.util.Optional;

/**
 * Criado por dougllas.sousa em 19/10/2018.
 */
public interface ModuloPermissaoRepository extends FullRepository<ModuloPermissao>{

    List<ModuloPermissao> findByPermissao(Permissao permissao);

    int deleteAllByPermissaoAndIdNotIn(Permissao permissao, Iterable<Long> ids);

    Optional<ModuloPermissao> findOneByModuloAndPermissao(Modulo modulo, Permissao permissao);
}