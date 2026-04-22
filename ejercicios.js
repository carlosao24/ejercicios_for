function ejecutar(numEjercicio){
    switch(numEjercicio){
        case 1: imprimirNumeros()
        break;
        case 2: imprimirNumeroReversa()
        break;
        case 3: listarPares()
        break;
        case 4: listarImpares()
        break;
    }
}

function imprimirNumeros(){
    for(let i = 0; i <= 3; i++){
        console.log(i)
    }
}

function imprimirNumeroReversa(){
    for(let i = 3; i > 0; i--){
        console.log(i)
    }
}

function listarPares(){
    for(let i = 0; i < 10; i+=2){
        console.log(i)
    }
}

function listarImpares(){
    for(let i = 1; i < 8; i+=2){
        console.log(i)
    }
}