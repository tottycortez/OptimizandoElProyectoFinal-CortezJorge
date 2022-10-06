/// TRAIGO LOS VALORES QUE LLEVE AL LOCAL
const traerUsuarioPagina = localStorage.getItem("datos")
//console.log(JSON.parse(traerUsuarioPagina))
/// EL NUEVO ARRAY QUE TRAGIO CON LOS DATOS QUE SE GUARDARON
const usuarioCorrecto = JSON.parse(localStorage.getItem("datos"))
console.log(usuarioCorrecto)

// DOM   ////////////////////////////////////////////////
let bienvenidoUsuario = document.createElement("h2")
bienvenidoUsuario.innerHTML = `<h2>Bienvenido/a ${usuarioCorrecto.nombre} </h2>`
document.body.appendChild(bienvenidoUsuario)

let btnCerrarSesion = document.querySelector("#cerrarSesion button")


//EVENTOS  //////////////////////////////////////////////////
btnCerrarSesion.addEventListener("click",()=> {
    



    location.href = "index.html"
})

