const articulo = function (nombre,precio){
    this.nombre = nombre
    this.precio = precio
}
let carrito = []
let acum = 0
let ultimaCompra = [];
let articulo1 = new articulo ("cloro", 250)
let articulo2 = new articulo ("lavandina", 210)
let articulo3 = new articulo ("jabon liquido", 400)
let articulo4 = new articulo ("perfumina para piso", 230)
let articulo5 = new articulo ("kaotrina", 200)
let articulo6 = new articulo ("suavizante", 410)

let articulos = [articulo1,articulo2,articulo3,articulo4,articulo5,articulo6]

let lista = document.getElementById("miSelect");
let boton = document.getElementById("agregarCarrito")
let cantidad = document.getElementById("cantidad")
let resultado = document.getElementById("resultado")
let listaCompras = document.getElementById ("listaCompras")
let botonComprar = document.getElementById ("btnComprar")
let btnMostrar = document.getElementById ("mostrar")
let mostrarLista = document.getElementById ("mostrarLista") 
let buscador = document.getElementById("buscadorArticulos");
let resultadoBusqueda = document.getElementById ("resultadoBusqueda")


window.onload = function () {
    botonComprar.style.display = 'none'
}

function cargandoSelect() {    
    articulos.forEach(function (articulo) {        
        lista.innerHTML += `<option value="${articulo.precio}">${articulo.nombre}</option>`;        
    })    
}
cargandoSelect()

function inicializar(){
    carrito = []
    acum = 0
    botonComprar.style.display = 'none'
    listaCompras.innerHTML = ""
    resultado.innerHTML = ""
    cantidad.value = ""   
    resultadoBusqueda.innerHTML= ""
    buscador.value = ""
}


boton.addEventListener("click", function () {    
    let inputCantidad = document.getElementById("cantidad")
    
    if (inputCantidad.value > 0) {
        agregarArticulo(inputCantidad)
    }
    else {
        alert ("Ingrese un numero valido")
    }
})

function agregarArticulo (inputCantidad){

    let art = lista.options[lista.selectedIndex].text
    let valor = lista.options[lista.selectedIndex].value
    let calculo = valor * inputCantidad.value
    acum = acum + calculo

    const compra = {
        nombre: art,
        precio: valor,
        cantidad: inputCantidad.value,
        total: calculo
    }
    carrito.push(compra)

    listaCompras.innerHTML += `<li>Articulo: ${compra.nombre}, Precio: ${compra.precio}, Cantidad: ${compra.cantidad}, Importe: ${compra.total}</li>`
    resultado.innerHTML = ""
    resultado.innerHTML += `PRECIO TOTAL: ${acum}`
    botonComprar.style.display = 'flex'
}

botonComprar.addEventListener("click", function () {
    localStorage.setItem("compraGuardada", JSON.stringify(carrito));
    alert ("¡Compra realizada con exito!")
    inicializar()
})


btnMostrar.addEventListener("click", function () {
    let valorGuardado = localStorage.getItem("compraGuardada");
    if (valorGuardado) {
        ultimaCompra = JSON.parse(valorGuardado);
        recorrerLista();
    }
    
})

function recorrerLista() {
    mostrarLista.innerHTML = "";
    if (ultimaCompra.length > 0) {        
        ultimaCompra.forEach(function (compra) {
            mostrarLista.innerHTML += `<li>Articulo: ${compra.nombre}, Precio: ${compra.precio}, Cantidad: ${compra.cantidad}, Importe: ${compra.total}</li>`
        });        
    }
}


buscador.addEventListener("input", function () {
    let cadenaBusqueda = buscador.value.toLowerCase();
    let articulosFiltrados = [...articulos].filter(function (articulo) {
        return articulo.nombre.toLowerCase().includes(cadenaBusqueda);
    });

    
    mostrarArticulosEncontrados(articulosFiltrados);
});

function mostrarArticulosEncontrados(art) {
    resultadoBusqueda.innerHTML = "";
    if (art.length > 0) {
        resultadoBusqueda.innerHTML += "<ul>";
        art.forEach(function (i) {
            resultadoBusqueda.innerHTML += `<li>Articulo: ${i.nombre}, Precio: ${i.precio}</li>`;
        });
        resultadoBusqueda.innerHTML += "</ul>";
    } else {
        resultadoBusqueda.innerHTML = "No se encontraron articulos que coincidan con la búsqueda.";
    }
}