//package org.dougllasfps.application.configurations;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
///**
// * Criado por dougllas.sousa em 09/10/2018.
// */
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//
//    @Autowired
//    private UserDetailsService userDetailsService;
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService( userDetailsService );
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.csrf()
//            .disable();
//        http
//            .userDetailsService( userDetailsService )
//            .authorizeRequests()
//            .antMatchers("/").permitAll()
//            .antMatchers("/**.xhtml").permitAll()
//            .antMatchers("/javax.faces.resource/**").permitAll()
//            .anyRequest().authenticated()
//        .and()
//            .formLogin()
//            .loginPage("/login.xhtml")
//            .permitAll()
//            .failureUrl("/login.xhtml?auth=failure")
//            .defaultSuccessUrl("/pages/controleacesso/permissao/permissao-search.xhtml")
//        .and()
//            .logout()
//            .invalidateHttpSession(true)
//            .logoutSuccessUrl("/login.xhtml");
//    }
//}
