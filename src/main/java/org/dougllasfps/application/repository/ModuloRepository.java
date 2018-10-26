package org.dougllasfps.application.repository;

import org.dougllasfps.application.model.controleacesso.Modulo;
import org.dougllasfps.application.model.controleacesso.Permissao;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Criado por dougllas.sousa em 19/10/2018.
 */

public interface ModuloRepository extends FullRepository<Modulo>{

    @Query(" select m from Modulo m where not exists ( select 1 from ModuloPermissao where modulo = m and permissao <> :permissao ) ")
    List<Modulo> findModulosNotInPermissao( @Param("permissao") Permissao permissao );
}