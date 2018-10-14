package org.dougllasfps.application.configurations;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Criado por dougllas.sousa em 09/10/2018.
 */

@Configuration
@EntityScan(basePackages = {"org.dougllasfps.application.model.*"})
@EnableJpaRepositories(basePackages = {"org.dougllasfps.application.repository"})
public class DataBaseConfiguration {

}
