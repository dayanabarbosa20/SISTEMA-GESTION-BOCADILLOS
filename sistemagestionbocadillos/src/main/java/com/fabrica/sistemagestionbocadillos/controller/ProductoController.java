package com.fabrica.sistemagestionbocadillos.controller;

import com.fabrica.sistemagestionbocadillos.model.Producto;
import com.fabrica.sistemagestionbocadillos.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepository;

    @GetMapping
    public List<Producto> obtenerTodos() {
        return productoRepository.findAll();
    }

    @PostMapping
    public Producto guardarProducto(@RequestBody Producto producto) {
        return productoRepository.save(producto);
    }
}