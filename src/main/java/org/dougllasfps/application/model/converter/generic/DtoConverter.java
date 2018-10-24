package org.dougllasfps.application.model.converter.generic;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

import static java.util.stream.Collectors.toList;

/**
 * Criado por dougllas.sousa em 24/10/2018.
 */
public interface DtoConverter< S, T > extends Function<S,T> {

    default T convert(final S input) {
        T output = null;
        if (input != null) {
            output = this.apply(input);
        }
        return output;
    }

    default List<T> convert(final List<S> input) {
        List<T> output = new ArrayList<T>();
        if (input != null) {
            output = input.stream().map(this::apply).collect(toList());
        }
        return output;
    }
}
