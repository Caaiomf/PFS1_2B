document.addEventListener("DOMContentLoaded", function(){

    var listaBtns = document.querySelectorAll(".btnCarrinho");

    for(var i = 0; i<listaBtns.length; i++) {
        listaBtns[i].addEventListener("click", adicionarCarrinho);
    }
    
})

function adicionarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

}