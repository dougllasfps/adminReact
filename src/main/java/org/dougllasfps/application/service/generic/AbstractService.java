package org.dougllasfps.application.service.generic;

import org.dougllasfps.application.model.BaseEntity;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

/**
 * Criado por dougllas.sousa em 10/10/2018.
 */
public interface AbstractService<T extends BaseEntity>  extends DemandPaginationService<T> {

    T save(T entidade);
    T update(T entidade);
    T saveOrUpdate(T entidade);

    void delete(T entidade);

    void saveAll(Collection<T> entidades);
    void updateAll(Collection<T> entidades);
    void saveOrUpdateAll(Collection<T> entidades);
    void deleteAll(Collection<T> entidades);

    Optional<T> find(Long id);
    List<T> find(T filtro);
    List<T> findAll();
    Long count();

    boolean exists(Long id);
    boolean exists(T filtro);

    T prepareEntityData(Long id);
    T createInstanceOfEntityClass();

    void beforeSave(T entidade);
    void validateSave(T entidade);
    void beforeUpdate(T entidade);
    void validateUpdate(T entidade);

    void beforeSaveOrUpdate(T entidade);
    void validateSaveOrUpdate(T entidade);
    void beforeDelete(T entidade);
    void validateDelete(T entidade);

}