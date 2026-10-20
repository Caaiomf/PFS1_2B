document.addEventListener("DOMContentLoaded", function(){

    var listaBtns = document.querySelectorAll(".btnCarrinho");

    for(var i = 0; i<listaBtns.length; i++) {
        listaBtns[i].addEventListener("click", adicionarCarrinho);
    }
    
})

function adicionarCarrinho() {
    var codigo = this.dataset.codigo;
        if(codigo != ""){
            var data = {
                codigo: codigo
            }
            fetch("/vitrine/carrinho", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            .then(r=> {
                return r.json();
            })
            .then(r=> {
                if(r.ok){
                    window.location.reload();
                }
                else{
                    alert("Erro ao excluir produto");
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

}