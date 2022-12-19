const sectionMenuPizza = document.getElementById("menu-pizza")
const sectionMenuGuarniciones = document.getElementById("menu-guarnicion")
const sectionMenuLasana = document.getElementById("menu-lasaña")
const sectionMenuBebida = document.getElementById("menu-bebida")


const botonPizza = document.getElementById("btn-pizza")
const botonPizza2 = document.getElementById("btn-pizza2")
const botonGuarnicion =document.getElementById("btn-guarniciones")
const botonGuarnicion2 = document.getElementById("btn-guarniciones2")
const botonLasana = document.getElementById("btn-lasañas")
const botonLasana2 = document.getElementById("btn-lasañas2")
const botonBebida = document.getElementById("btn-bebidas")
const botonBebida2 = document.getElementById("btn-bebidas2")

function inicializacion() {
    sectionMenuPizza.style.display = "none"
    botonPizza.addEventListener('click', btnPizza)
    botonPizza2.addEventListener('click', btnPizza2)
    botonPizza2.style.display = "none"

    sectionMenuGuarniciones.style.display = "none"
    botonGuarnicion.addEventListener('click', btnGuarnicion)
    botonGuarnicion2.addEventListener('click', btnGuarnicion2)
    botonGuarnicion2.style.display = "none"

    sectionMenuLasana.style.display = "none"
    botonLasana.addEventListener('click', btnLasana)
    botonLasana2.addEventListener('click', btnLasana2)
    botonLasana2.style.display = "none"

    sectionMenuBebida.style.display = "none"
    botonBebida.addEventListener('click', btnBebida)
    botonBebida2.addEventListener('click', btnBebida2)
    botonBebida2.style.display = "none"
}
//Funcion de los botones
function btnPizza() {
    botonPizza.style.display = "none"
    botonPizza2.style.display = "flex"
    sectionMenuPizza.style.display = "block"
}

function btnPizza2() {
    botonPizza2.style.display = "none"
    botonPizza.style.display = "flex"
    sectionMenuPizza.style.display = "none"
}

function btnGuarnicion() {
    botonGuarnicion.style.display = "none"
    botonGuarnicion2.style.display = "flex"
    sectionMenuGuarniciones.style.display = "block"
}

function btnGuarnicion2() {
    botonGuarnicion2.style.display = "none"
    botonGuarnicion.style.display = "flex"
    sectionMenuGuarniciones.style.display = "none"
} 

function btnLasana() {
    botonLasana.style.display = "none"
    botonLasana2.style.display = "flex"
    sectionMenuLasana.style.display = "block"
}

function btnLasana2() {
    botonLasana2.style.display = "none"
    botonLasana.style.display = "flex"
    sectionMenuLasana.style.display = "none"
}

function btnBebida() {
    botonBebida.style.display = "none"
    botonBebida2.style.display = "flex"
    sectionMenuBebida.style.display = "block"
}

function btnBebida2() {
    botonBebida2.style.display = "none"
    botonBebida.style.display = "flex"
    sectionMenuBebida.style.display = "none"
}

window.addEventListener('load', inicializacion)