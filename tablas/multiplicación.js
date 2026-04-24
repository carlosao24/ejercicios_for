function generarTabla(){
    let contenido = ""
    let contenedor = document.getElementById("contenedorTabla")
    let valor = document.getElementById("txtCaja1")
    let n = valor.value;
    let numeroTabla = parseInt(n)
    for(let i =1; i < 13; i++){
        contenido = contenido + "<div class='table-row' ><span>"+ numeroTabla +"x" + (i) + "=</span> <strong>"+ (numeroTabla * i) + "</strong></div>"
        console.log(contenido)
        contenedor.innerHTML = contenido 
    }
    mostrarTexto(numeroTabla);
}

function mostrarTexto(valor){
    let numero = document.getElementById("numero")
    let mostrarNumero = ""
    mostrarNumero = mostrarNumero + "<h2 id='numero'><span>TABLA DEL "+valor+"</span></h2>"
    console.log(mostrarNumero)
    numero.innerHTML = mostrarNumero
}

function reiniciar(){
    location.reload()
}