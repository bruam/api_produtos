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
    const id = req.params.id;
    const sql = "SELECT * FROM produto WHERE id = ?"
    conexao.query(sql, [id], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
        }
        else {
            if(rows && rows.length > 0){ //se rows nao nulo e nao vazio
                res.json(rows[0]); //retorna linha pesquisada
            }
            else{
                res.status(404).json({"msg":"Produto não encontrado"});
            }
        }        
    })    
}

exports.inserir = (req, res) => { 
    //Obter o dado do request - nome e o preco
    const produto = req.body;
    //validar os dados - conceito B
    // if(!produto || !produto.nome){
    //     // erro 400 - bad request
    //     res.status(400).json({"erro":"Produto deve ter nome"})
    // }
    //SQL
    const sql = "INSERT INTO produto(nome,preco) VALUES(?,?)"
    conexao.query(sql, [produto.nome,produto.preco], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"});
            console.log(erro);
        }
        else {
            // guarda id de produto recem criado
            produto.id = rows.insertId;
            // mostra produto recem criado
            res.status(201).json(produto)
        }        
    })   
    // const produto = JSON.stringify(req.body)
    // res.status(201).send(`Inserir Produtos ${produto}`)
}

exports.atualizar = (req, res) => {
    const id = req.params.id;
    const produto = req.body;    
    const sql = "UPDATE produto SET nome = ?, preco = ? WHERE id = ?"
    conexao.query(sql, [produto.nome,produto.preco,id], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"});
            console.log(erro);
        }
        else {
            // id da variavel produto recebe variavel id, do produto modificado
            produto.id = +id; //sinal de + converte para number (ou usar parseInt)
            //mostra o produto modificado
            res.status(201).json(produto)
        }        
    })
    // res.send(`Edita produto ${req.params.id}`)
}

exports.deletar = (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM produto WHERE id = ?"
    conexao.query(sql, [id], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})            
        }
        else {
            if(rows.affectedRows){ //se alguma linha tiver sido afetada
                res.json({"msg":`Produto ${id} removido`}); //retorna mensagem
            }
            else{
                res.status(404).json({"msg":"Produto não encontrado"});
            }
        }        
    })
    //res.send(`Deleta produto ${req.params.id}`)
}

