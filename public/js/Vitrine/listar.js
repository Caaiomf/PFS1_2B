document.addEventListener("DOMContentLoaded", function(){

    var listaBtns = document.querySelectorAll(".btnCarrinho");

    for(var i = 0; i<listaBtns.length; i++) {
        listaBtns[i].addEventListener("click", adicionarCarrinho);
    }
    
})

function adicionarCarrinho() {
    var nomeProduto = this.dataset.codigo;
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(nomeProduto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert(`"${nomeProduto}" Foi adicionado ao carrinho!`);
}