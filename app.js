let items = [];
let total = 0;
let products = [
    {name: "Laptop", price: 1000},
    {name: "Tablet", price: 500}, 
    {name: "Smartphone", price: 800},
    {name: "Monitor", price: 300}
];


function addItem() {
    let product = prompt("ingrese el producto que desea agregar o quitar del carrito de compras:");
    let option = prompt("ingrese si desea agregar o quitar el producto del carrito de compras: agregar o quitar");
    if (option === "agregar") {
        let product_obj = products.find(p => p.name === product);
        if (product_obj) {
            items.push(product_obj);
            updateItemsList();
        } else {
            alert("producto no encontrado");
        }
    } else if( option === "quitar"){
        let index = items.findIndex(p => p.name === product);
        if (index !== -1) {
            items.splice(index, 1);
            updateItemsList();
        } else {
            alert("producto no encontrado en el carrito de compras");
        }
    }else{
        alert("opcion no valida")
    }
}

function updateItemsList() {
  let itemsList = document.getElementById("items");
  itemsList.innerHTML = "";
  total = 0;

  for (let i = 0; i < items.length; i++) {
    let product = items[i];
    itemsList.innerHTML += "<li>" + product.name + " - $" + product.price + "</li>";
    total += product.price;
  }
}

function checkout() {
  alert("Total de compra: $" + total);
}