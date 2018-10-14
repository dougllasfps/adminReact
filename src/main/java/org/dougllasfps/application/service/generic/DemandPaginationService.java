package org.dougllasfps.application.service.generic;

import org.springframework.data.domain.Sort;

import java.util.List;

/**
 * Criado por dougllas.sousa em 10/10/2018.
 */
public interface DemandPaginationService<T> {
    List<T> load( int offset, int limit, Sort sortOptions , T filtro);

    Long count(T filtro);
}
