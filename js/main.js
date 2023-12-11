const articulo = function (nombre,precio){
    this.nombre = nombre
    this.precio = precio
}

let articulo1 = new articulo ("Cloro", 250)
let articulo2 = new articulo ("Lavandina", 210)
let articulo3 = new articulo ("Jabon liquido", 400)
let articulo4 = new articulo ("Perfumina para piso", 230)

let articulos = [articulo1,articulo2,articulo3,articulo4]

let lista = document.getElementById("miSelect");
let boton = document.getElementById("agregarCarrito")
let cantidad = document.getElementById("cantidad")
let resultado = document.getElementById("resultado")
let listaCompras = document.getElementById ("listaCompras")
let botonComprar = document.getElementById ("btnComprar")

window.onload = function () {
    botonComprar.style.display = 'none'
}

function cargandoSelect() {    
    articulos.forEach(function (articulo) {        
        lista.innerHTML += `<option value="${articulo.precio}">${articulo.nombre}</option>`;        
    })    
}

cargandoSelect()

let carrito = []
let acum = 0

boton.addEventListener("click", function () {
    
    let inputCantidad = document.getElementById("cantidad")
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



    carrito.forEach(function (lacompra) {
        console.log (lacompra.nombre)
        console.log (lacompra.precio)
        console.log (lacompra.cantidad)
        console.log (lacompra.total)
    });   

})