package org.dougllasfps.application.repository;

import org.dougllasfps.application.model.controleacesso.Grupo;
import org.dougllasfps.application.model.controleacesso.Permissao;

import java.util.List;

/**
 * Criado por dougllas.sousa em 09/10/2018.
 */
public interface GrupoRepository extends FullRepository<Grupo> {

    List<Grupo> findAllByPermissoesNotIn(Iterable<Permissao> permissoes);
}