// Função para adicionar itens ao carrinho
function addToCart(productName, price) {
    var cartItems = document.getElementById("cartItems");
    var listItem = document.createElement("li");
    listItem.textContent = productName + " - R$ " + price;
    cartItems.appendChild(listItem);
}

// Função para finalizar a compra e abrir a conversa no WhatsApp
function checkout() {
    // Aqui você pode adicionar a lógica para enviar a mensagem ao WhatsApp
    // Substitua o número de telefone abaixo pelo seu número de WhatsApp
    var phoneNumber = "SEU_NUMERO_DE_WHATSAPP";
    var message = "Olá, estou interessado nos seguintes itens:";
    var cartItems = document.getElementById("cartItems").getElementsByTagName("li");
    for (var i = 0; i < cartItems.length; i++) {
        message += "\n" + cartItems[i].textContent;
    }
    // Substitua 'api.whatsapp.com' por 'web.whatsapp.com' se preferir abrir no WhatsApp Web
    var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(whatsappLink, '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
    var addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var productName = this.getAttribute("data-name");
            var productPrice = this.getAttribute("data-price");
            addToCart(productName, productPrice);
        });
    });

    var checkoutButton = document.getElementById("checkoutBtn");
    checkoutButton.addEventListener("click", function() {
        checkout();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var cartButton = document.getElementById("cartButton");
    var cart = document.getElementById("carrinho");

    cartButton.addEventListener("click", function() {
        cart.classList.toggle("active");
    });
});
