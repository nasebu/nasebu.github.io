
let miImagen = document.querySelector("img");
miImagen.onclick = function (){
    let miSrc = miImagen.getAttribute("src");
    if (miSrc === "img/skyline.jpeg") {
        miImagen.setAttribute("src", "img/skyline_oconer.avif");
    }else {
        miImagen.setAttribute("src", "img/skyline.jpeg")
    }
}

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function establecerNombreUsuario(){
    let miNombre = prompt("Por favor, ingresa el nombre de usuario");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Coleccion de veh. es genial, "+ miNombre;
}
if (!localStorage.getItem("nombre")) {
    establecerNombreUsuario();
}else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "La coleccion de veh. es genial, "+ nombreAlmacenado;
}
miBoton.onclick = function () {
    establecerNombreUsuario();
};

function establecerNombreUsuario(){
    let miNombre = promt ("Introduzca su nombre");
    if (!miNombre) {
        establecerNombreUsuario();
    }else {
        localStorage.setItem("nombre", miNombre);
        miTitulo.innerHTML = "Coleccion de veh,  " + miNombre;
    }
}