import express from "express";
import cors from "cors";
import {obtenerTodasLasPizzasAsync, obtenerPizzaPorIdAsync} from './repositorios/pizza.repositorio.js';

//const express = require("express");
const app = express();
app.use(cors());
const PORT = 3000; // Puerto en el que escuchará el servidor

// Configuración para usar el body en un método POST
app.use(express.json()); // Middleware para parsear JSON
app.use(express.urlencoded({ extended: true })); // Middleware para parsear datos de formularios:

app.get("/api/v1/pizzas", async (req, res)=>{
    const pizzas = await obtenerTodasLasPizzasAsync();
    return res.status(200).json(pizzas);
});

app.get("/api/v1/pizzas/:id", async (req, res)=>{
    const id = req.params.id; // Obtener el valor del parámetro de ruta "id"
    const pizzas = await obtenerPizzaPorIdAsync(id); //Aplicación de método solid
    return res.status(200).json(pizzas);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto http://localhost:${PORT}`);
});