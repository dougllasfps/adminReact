package org.dougllasfps.application.repository;

import org.dougllasfps.application.model.controleacesso.Modulo;
import org.dougllasfps.application.model.controleacesso.Permissao;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Join;
import javax.persistence.criteria.Root;
import javax.persistence.criteria.Subquery;

public interface PermissaoSpecs {
    static Specification<Permissao> descricaoLike(String descricao){
        return (root, criteriaQuery, cb) -> cb.like(cb.upper(root.get("descricao")), "%" + descricao.toUpperCase() + "%");
    }

    static Specification<Permissao> labelLike(String label){
        return (root, criteriaQuery, cb) -> cb.like(cb.upper(root.get("label")), "%" + label.toUpperCase() + "%");
    }

    static Specification<Permissao> hasModulo(Long idModulo){
        return (root, criteriaQuery, cb) ->{

            Subquery<Modulo> subquery = criteriaQuery.subquery(Modulo.class);
            Root<Modulo> fromModulo = subquery.from(Modulo.class);
            subquery.select(fromModulo.get("id"));
            subquery.where(cb.equal(fromModulo.get("id"), idModulo));

            return cb.in(root.join("modulos").get("id")).value(subquery);
        };
    }
}
