/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Domingo_Reto3.Reto3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.web.bind.annotation.RestController;

@EntityScan(basePackages = {"Domingo_Reto3.Reto3"}) // scan JPA entities
@SpringBootApplication
@RestController
public class SocialAplication extends WebSecurityConfigurerAdapter {


    public static void main(String[] args) {
        SpringApplication.run(SocialAplication.class, args);
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	// @formatter:off
        http
            .authorizeRequests(a -> a
                .antMatchers("/","/api/Category/**","/api/Motorbike/**","/api/Client/**","/api/Message/**","/api/Reservation/**","/api/Score/**", "/error", "/webjars/**").permitAll()
                .anyRequest().authenticated()
            )
            .exceptionHandling(e -> e
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
            )
            .logout(l -> l
            .logoutSuccessUrl("/").permitAll()
                )
            .oauth2Login();
        // @formatter:on
        http.cors().and().csrf().disable();
    }

}