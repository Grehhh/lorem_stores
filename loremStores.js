var cart = document.getElementById('contenido');
var textBox = '';
var textTotal = '';
var total = 0;
var arrProducts = [];

function addtoCart (name,price) {
    var product = {
        'name' : name,
        'price' : price
    }
    arrProducts.push(product);
    total += price;    
    textBox += `<p>${product.name}, precio = ${product.price}</p>`;
    textTotal = `<p>Total = ${total}</p>`;
    cart.innerHTML = textBox + textTotal;
    alert('Producto añadido al carrito');
}

function pay () {
    arrProducts = [];    
    textBox = '';
    textTotal = '';
    total = 0;
    cart.innerHTML = textBox + textTotal;
    
}