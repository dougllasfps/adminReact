package org.dougllasfps.application.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

/**
 * Criado por dougllas.sousa em 09/10/2018.
 */

@NoRepositoryBean
public interface FullRepository<T>
        extends
                CrudRepository<T, Long>,
                PagingAndSortingRepository<T, Long>,
                JpaSpecificationExecutor<T>,
                QueryByExampleExecutor<T> {
}
