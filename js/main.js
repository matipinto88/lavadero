const articulo = function (nombre,precio){
    this.nombre = nombre
    this.precio = precio
}

let articulo1 = new articulo ("cloro", 200)
let articulo2 = new articulo ("lavandina", 300)
let articulo3 = new articulo ("jabon liquido", 350)
let articulo4 = new articulo ("perfumina para piso", 150)

let articulos = [articulo1,articulo2,articulo3,articulo4]


function bienvenido() {
    let producto = parseInt(prompt("¡Bienvenido! Seleccione un producto ingresando un numero entre 1 y 4" + "\n" + "\n1. Cloro" + "\n2. Lavandina" + "\n3. Jabon liquido" + "\n4. Perfumina"))

    if (!Number.isInteger(producto)) {
        alert("El valor ingresado no es un numero")
    }else{
        if ((producto < 1) || (producto > 4)) {
            alert("Por favor, ingresar un numero entre 1 y 4.")
            bienvenido()
        } else {
            for (let i= 0; i < articulos.length; i++) {
                if (producto == i+1) {
                    calcular(articulos[i])
                    break;
                }
            }
        }
    }
}
function calcular(articulo){    
    let cantidad = parseInt(prompt("Ingrese cuantos litros de " + articulo.nombre + " desea comprar"))
    if (!Number.isInteger(cantidad)) {
        alert("El valor ingresado no es un numero")
        calcular(articulo)
    }else{
        let resultado = cantidad * articulo.precio
        alert ("Estas comprando " + cantidad + "L de " + articulo.nombre + "\nEl valor de su compra es " + "$" + resultado)
    }
}

bienvenido()