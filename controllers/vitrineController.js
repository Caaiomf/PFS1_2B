const ProdutoModel = require("../models/produtoModel");




class VitrineController{

    async listarView(req,res){
        let p = new ProdutoModel();
        let produtos = await p.listarProdutos();
        res.render("Vitrine/listagem", {lista: produtos, layout: false});
    }

}

module.exports = VitrineController;