const conexao = require('../config/conexaoBD')

exports.listar = (req, res) => {
    const sql = "SELECT * FROM produto"
    conexao.query(sql, (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
        }
        else {
            res.json(rows)
        }        
    })
}

exports.buscarPorId = (req, res) => {
    const sql = "SELECT * FROM produto WHERE id = ?"
    conexao.query(sql, [req.params.id], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
        }
        else {
            res.json(rows)
        }        
    })    
}

exports.inserir = (req, res) => { 
    const sql = "INSERT INTO produto(nome,preco) VALUES(?,?)"
    conexao.query(sql, [req.params.nome,req.params.preco], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})            
        }
        else {
            res.json(rows)
        }        
    })   
    // const produto = JSON.stringify(req.body)
    // res.status(201).send(`Inserir Produtos ${produto}`)
}

exports.atualizar = (req, res) => {
    const sql = "UPDATE produto SET nome = ?, preco = ? WHERE id = ?"
    conexao.query(sql, [req.params.nome,req.params.preco,req.params.id], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})            
        }
        else {            
            res.json(rows)
        }        
    })
    // res.send(`Edita produto ${req.params.id}`)
}

exports.deletar = (req, res) => {
    const sql = "DELETE FROM produto WHERE id = ?"
    conexao.query(sql, [req.params.id], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})            
        }
        else {
            res.json(rows)
        }        
    })
    //res.send(`Deleta produto ${req.params.id}`)
}

