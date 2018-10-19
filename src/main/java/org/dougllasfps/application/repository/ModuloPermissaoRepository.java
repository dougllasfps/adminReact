package org.dougllasfps.application.repository;

import org.dougllasfps.application.model.controleacesso.ModuloPermissao;
import org.dougllasfps.application.model.controleacesso.Permissao;

import java.util.List;

/**
 * Criado por dougllas.sousa em 19/10/2018.
 */
public interface ModuloPermissaoRepository extends FullRepository<ModuloPermissao>{
    List<ModuloPermissao> findByPermissao(Permissao permissao);
}