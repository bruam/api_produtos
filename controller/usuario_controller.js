const conexao = require('../config/conexaoBD')

exports.listar = (req, res) => {
    const sql = "SELECT * FROM usuario"
    conexao.query(sql, (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
        }
        else {
            res.status(200).json(rows)
        }        
    })
}

exports.buscarPorId = (req, res) => {    
    const sql = "SELECT * FROM usuario WHERE cd_usuario = ?"
    conexao.query(sql, [req.params.id], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
        }
        else {
            res.status(200).json(rows)
        }        
    })    
}

exports.inserir = (req, res) => { 
    const usuario = req.body;
    const sql = "INSERT INTO usuario(nome,email,senha) VALUES(?,?,?)"
    conexao.query(sql, [usuario.nome,usuario.preco], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})            
        }
        else {
            res.status(201).json(rows)
        }        
    })   
    // const produto = JSON.stringify(req.body)
    // res.status(201).send(`Inserir Produtos ${produto}`)
}

exports.atualizar = (req, res) => {
    const usuario = req.body;
    const sql = "UPDATE usuario SET nome = ?, senha = ?, email = ? WHERE id = ?"
    conexao.query(sql, [usuario.nome,usuario.email,usuario.senha,req.params.id], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})            
        }
        else {            
            res.status(201).json(rows)
        }        
    })
    // res.send(`Edita produto ${req.params.id}`)
}

exports.deletar = (req, res) => {
    const sql = "DELETE FROM usuario WHERE id = ?"
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

