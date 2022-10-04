/// TRAIGO LOS VALORES QUE LLEVE AL LOCAL
const usuarioPagina = localStorage.getItem("datos")
console.log(JSON.parse(usuarioPagina))
/// EL NUEVO ARRAY QUE TRAGIO CON LOS DATOS QUE SE GUARDARON
const usuarioCorrecto = JSON.parse(localStorage.getItem("usuario"))
console.log(usuarioCorrecto)

// DOM   ////////////////////////////////////////////////
let btnCerrarSesion = document.querySelector("#cerrarSesion button")


//EVENTOS  //////////////////////////////////////////////////
btnCerrarSesion.addEventListener("click",()=> {
    



    location.href = "index.html"
})

let bienvenidoUsuario = document.createElement("h2")
bienvenidoUsuario.innerHTML = `<h2>Bienvenido/a ${usuarioCorrecto.nombre}!!</h2>`