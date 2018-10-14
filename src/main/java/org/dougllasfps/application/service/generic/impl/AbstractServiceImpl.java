package org.dougllasfps.application.service.generic.impl;

import org.dougllasfps.application.model.BaseEntity;
import org.dougllasfps.application.repository.FullRepository;
import org.dougllasfps.application.service.generic.DemandPaginationService;
import org.dougllasfps.application.service.generic.AbstractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.ParameterizedType;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

/**
 * Criado por dougllas.sousa em 10/10/2018.
 */

@Service
public abstract class AbstractServiceImpl<T extends BaseEntity, REPOSITORY extends FullRepository<T>> implements AbstractService<T>, DemandPaginationService<T> {

    @Autowired
    private REPOSITORY repository;
    private Class<T> entityClass;

    @Override
    public void beforeSave(T t) {}

    @Override
    public void validateSave(T t) {}

    @Override
    @Transactional
    public T save(T t) {
        validationsAndBeforeSave(t);
        return repository.save(t);
    }

    private void validationsAndBeforeSave(T t) {
        validateSave(t);
        validateSaveOrUpdate(t);
        beforeSave(t);
        beforeSaveOrUpdate(t);
    }

    @Override
    public void beforeUpdate(T t) {}

    @Override
    public void validateUpdate(T t) {}

    @Override
    @Transactional
    public T update(T t) {
        validationsAndBeforesUpdate(t);
        return repository.save(t);
    }

    private void validationsAndBeforesUpdate(T t) {
        validateUpdate(t);
        validateSaveOrUpdate(t);
        beforeUpdate(t);
        beforeSaveOrUpdate(t);
    }

    @Override
    public void beforeSaveOrUpdate(T t) {}

    @Override
    public void validateSaveOrUpdate(T t) {}

    @Override
    @Transactional
    public T saveOrUpdate(T t) {
        validateSaveOrUpdate(t);
        beforeSaveOrUpdate(t);
        return repository.save(t);
    }

    @Override
    public void beforeDelete(T t) {}

    @Override
    public void validateDelete(T t) {}

    @Override
    @Transactional
    public void delete(T t) {
        validateDelete(t);
        beforeDelete(t);
        repository.delete(t);
    }

    @Override
    @Transactional
    public void saveAll(Collection<T> ts) {
        ts.forEach( e -> validationsAndBeforeSave(e) );
        repository.saveAll(ts);
    }

    @Override
    @Transactional
    public void updateAll(Collection<T> ts) {
        ts.forEach( e -> validationsAndBeforesUpdate(e) );
        repository.saveAll(ts);
    }

    @Override
    @Transactional
    public void saveOrUpdateAll(Collection<T> ts) {
        ts.forEach( e ->{
            validateSaveOrUpdate(e);
            beforeSaveOrUpdate(e);
        });
        repository.saveAll(ts);
    }

    @Override
    @Transactional
    public void deleteAll(Collection<T> ts) {
        ts.forEach( e ->{
            validateDelete(e);
            beforeDelete(e);
        });

        repository.deleteAll(ts);
    }

    @Override
    public Optional<T> find(Long id) {
        return repository.findById(id);
    }

    @Override
    public List<T> find(T filtro) {
        return (List<T>) repository.findAll(getDefaultExample(filtro));
    }

    @Override
    public List<T> findAll() {
        return (List<T>) repository.findAll();
    }

    @Override
    public Long count() {
        return repository.count();
    }

    @Override
    public Long count(T filtro) {
        return repository.count(getDefaultExample(filtro));
    }

    @Override
    public boolean exists(Long id) {
        return repository.existsById(id);
    }

    @Override
    public boolean exists(T filtro) {
        return count(filtro) > 0;
    }

    public Example<T> getDefaultExample(T filtro){

        ExampleMatcher defaultMatcher = ExampleMatcher
                .matching()
                .withIgnoreNullValues()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);

        return  Example.of(filtro, defaultMatcher);
    }

    @Override
    public T prepareEntityData(Long id) {
        return find(id).orElse(null);
    }

    @Override
    public T createInstanceOfEntityClass() {
        try {
            return getEntityClass().newInstance();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        return null;
    }

    public Class<T> getEntityClass() {
        if(entityClass == null)
            entityClass = (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass() ).getActualTypeArguments()[0];
        return entityClass;
    }

    public REPOSITORY getRepository() {
        return repository;
    }

    @Override
    public List<T> load( int offset, int limit, Sort sortOptions, T filtro) {
        Example<T> example = getDefaultExample(filtro);
        PageRequest pageRequest = sortOptions == null ? PageRequest.of(offset, limit) : PageRequest.of(offset, limit, sortOptions);
        return repository.findAll( example, pageRequest ).getContent();
    }
}
