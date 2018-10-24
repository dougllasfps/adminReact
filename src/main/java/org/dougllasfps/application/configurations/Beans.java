package org.dougllasfps.application.configurations;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Criado por dougllas.sousa em 24/10/2018.
 */
@Configuration
public class Beans {

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}