const cloro = 200
const lavandina = 300
const jabonLiquido = 350
const perfumina = 150

function bienvenido(){
    let producto = prompt("¡Bienvenido! Seleccione un producto ingresando un numero entre 1 y 4" + "\n" + "\n1. Cloro" + "\n2. Lavandina" + "\n3. Jabon liquido" + "\n4. Perfumina")
    if ((producto > 0) && (producto < 5)){
        calcularPrecio(producto) 
    }else {
        alert ("El valor ingresado no es correcto, reintentar.")
        bienvenido()
    }   
       
}
function calcularPrecio(producto){
    let articulo
    let valor
    if (producto == 1) {
        articulo = "Cloro"
        valor = cloro
    }
    else if (producto == 2) {
        articulo = "Lavandina"
        valor = lavandina
    }
    else if (producto == 3) {
        articulo = "Jabon Liquido"
        valor = jabonLiquido
    }
    else {
        articulo = "Perfumina"
        valor = perfumina
    }
    let cantidad = prompt("Ingrese cuantos litros de " + articulo + " desea comprar")
    let resultado = cantidad * valor
    alert ("Estas comprando " + cantidad + "L de " + articulo + "\nEl valor de su compra es " + "$" + resultado)
}
bienvenido()