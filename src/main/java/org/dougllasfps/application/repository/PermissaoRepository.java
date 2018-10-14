package org.dougllasfps.application.repository;

import org.dougllasfps.application.model.controleacesso.Permissao;

/**
 * Criado por dougllas.sousa em 09/10/2018.
 */
public interface PermissaoRepository extends FullRepository<Permissao> {

    boolean existsByLabel(String label);

    boolean existsByDescricao(String descricao);

    boolean existsByLabelOrDescricao(String label, String descricao);
}