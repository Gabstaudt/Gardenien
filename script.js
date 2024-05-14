document.addEventListener("DOMContentLoaded", function() {
    var cartButton = document.getElementById("cartButton");
    var cart = document.getElementById("carrinho");
    var checkoutBtn = document.getElementById("checkoutBtn");
    var cartItems = []; // Array para armazenar os itens do carrinho

    // Adicionar evento de clique ao botão do carrinho
    cartButton.addEventListener("click", function() {
        cart.classList.toggle("active");
    });

    // Adicionar evento de clique ao botão "Finalizar Compra"
    checkoutBtn.addEventListener("click", function() {
        // Criar a mensagem com base nos itens do carrinho
        var message = "Olá! Gostaria de finalizar a compra dos seguintes itens:\n";
        for (var i = 0; i < cartItems.length; i++) {
            message += "- " + cartItems[i] + "\n";
        }

        // Codificar a mensagem para ser usada no link do WhatsApp
        var encodedMessage = encodeURIComponent(message);

        // Redirecionar para o WhatsApp com a mensagem personalizada
        window.location.href = "https://wa.me/5591998054058?text=" + encodedMessage;
    });

    // Lógica para adicionar itens ao carrinho
    var addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var productName = this.getAttribute("data-name");
            cartItems.push(productName);
            renderCart(); // Atualizar o carrinho
        });
    });

    // Função para atualizar o carrinho
    function renderCart() {
        var cartList = document.getElementById("cartItems");
        cartList.innerHTML = ""; // Limpar o conteúdo do carrinho

        cartItems.forEach(function(item) {
            var listItem = document.createElement("li");
            listItem.textContent = item;
            cartList.appendChild(listItem);
        });
    }
});

