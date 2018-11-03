package org.dougllasfps.application.service;

import org.dougllasfps.application.model.controleacesso.Usuario;
import org.dougllasfps.application.repository.UsuarioRepository;
import org.dougllasfps.application.service.generic.impl.AbstractServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService extends AbstractServiceImpl<Usuario, UsuarioRepository> {
}
