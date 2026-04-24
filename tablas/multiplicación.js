function generarTabla(){
    let contenido = ""
    let contenedor = document.getElementById("contenedorTabla")
    for(let i =1; i < 11; i++){
        contenido = contenido + "<div class='table-row' ><span>5 x " + (i) + "=</span> <strong>"+ (5 * i) + "</strong></div>"
        console.log(contenido)
        contenedor.innerHTML = contenido
    }
    
}