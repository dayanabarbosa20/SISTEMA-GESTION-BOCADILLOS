package com.fabrica.sistemagestionbocadillos.repository;

import com.fabrica.sistemagestionbocadillos.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    
    // Método personalizado para buscar un usuario por su correo
    Optional<Usuario> findByEmail(String email);
}