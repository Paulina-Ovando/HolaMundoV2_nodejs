import express from "express";
import cors from "cors";
import {obtenerTodasLasPizzasAsync, obtenerPizzaPorIdAsync, agregarPizzaAsync, actualizarPizzaAsync, eliminarPizzaAsync} from './repositorios/pizza.repositorio.js';

//const express = require("express");
const app = express();
app.use(cors());
const PORT = 3000; // Puerto en el que escuchará el servidor

// Configuración para usar el body en un método POST
app.use(express.json()); // Middleware para parsear JSON
app.use(express.urlencoded({ extended: true })); // Middleware para parsear datos de formularios:

app.get("/", async (req, res)=>{
    const saludo = { mensaje: "Bienvenido a la API Fes Aragón V1"}
    
    return res.json(saludo)
});

app.get("/api/v1/pizzas", async (req, res)=>{
    const pizzas = await obtenerTodasLasPizzasAsync();
    const objeto = {
        lista: pizzas,
        totalEnLaPagina: pizzas.length,
        paginaActual: 1,
        totalDePaginas: 10,
        total: 10
    }
    return res.status(200).json(objeto);
});

app.get("/api/v1/pizzas/:id", async (req, res)=>{
    const id = req.params.id;
    const pizza = await obtenerPizzaPorIdAsync(id);

    return res.status(200).json(pizza);
});

app.post("/api/v1/pizza", async (req, res)=>{
    const pizza = req.body;
    const id = await agregarPizzaAsync(pizza);
    const idDto = {id: id, fecha: new Date()};

    return res.status(201).json(idDto);
});

app.put("/api/v1/pizzas/:id", async (req, res)=>{
    const id = req.params.id;
    const pizza = await obtenerPizzaPorIdAsync(id);
    if(pizza == undefined) {
        const mensaje = {mensaje: "No se encontró la pizza con el id: " + id};
        return res.status(404).json(mensaje);
    }

    const pizzaActualizada = req.body;
    await actualizarPizzaAsync(id, pizzaActualizada);
    const mensaje = {mensaje: "Datos actualizados correctamente"};

    return res.status(202).json(mensaje);
});

app.delete("/api/v1/pizzas/:id", async (req, res)=>{
    const id = req.params.id;
    const eliminada = await eliminarPizzaAsync(id);
    if (!eliminada) {
        const mensaje = {mensaje: "No se encontró la pizza con el id: " + id};
        return res.status(404).json(mensaje);
    }
    const mensaje = {mensaje: "Datos eliminados correctamente"};

    return res.status(200).json(mensaje);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto http://localhost:${PORT}`);
});