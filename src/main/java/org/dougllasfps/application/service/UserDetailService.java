//package org.dougllasfps.application.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.Arrays;
//import java.util.Collection;
//
//@Service
//public class UserDetailService implements UserDetailsService {
//
//	@Autowired
//	private PasswordEncoder encoder;
//
//	@Override
//	public UserDetails loadUserByUsername(String arg0) throws UsernameNotFoundException {
//		Collection<? extends GrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority("ADMIN"));
//		String password = encoder.encode("123");
//		return User
//				.builder()
//				.username("dougllas")
//				.password(password)
//				.credentialsExpired(false)
//				.accountLocked(false)
//				.authorities(authorities)
//				.build();
//	}
//}