const express = require('express');
const rotas = express.Router();
const produtoController = require('../controller/produto_controller')

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
rotas.get('/', produtoController.listar)
rotas.get('/:id', produtoController.buscarPorId)
rotas.post('/:nome/:preco', produtoController.inserir)
rotas.put('/:id/:nome/:preco', produtoController.atualizar)
rotas.delete('/:id', produtoController.deletar)


module.exports = rotas