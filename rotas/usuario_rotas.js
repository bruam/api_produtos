const express = require('express');
const rotas = express.Router();
const usuarioController = require('../controller/usuario_controller')

/*
rotas.get('/:id', (req,res) => {
    res.send(`Listar produtos ${req.params.id}`)
})
rotas.post('/', (req,res) => {
    res.send(`Inserir produto`)
})

rotas.put('/:id', (req,res) => {
    res.send(`Edita produto ${req.params.id}`)
})

rotas.delete('/:id', (req,res) => {
    res.send(`Deleta produto ${req.params.id}`)
})
*/

// Com controller
rotas.get('/', usuarioController.listar)
rotas.get('/:id', usuarioController.buscarPorId)
rotas.post('/', usuarioController.inserir)
rotas.put('/:id', usuarioController.atualizar)
rotas.delete('/:id', usuarioController.deletar)


module.exports = rotas