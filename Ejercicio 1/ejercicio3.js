//Comprueba si una palabra escrita alreves se escribe igual que la original
ComprobarAlreves("almendra")

function ComprobarAlreves(palabra){

    let arrayLetras = palabra.split('');//asi para dividir por letras, con espacio para dividir por palabras
    console.log(arrayLetras);
    let palabraAlrevesSeparada = arrayLetras.reverse();
    console.log(palabraAlrevesSeparada);
    let palabarAlrevesEspacios = palabraAlrevesSeparada.join(); //si lo ponemos asi automaticamente nos va a poner comas 
    let palabarAlreves = palabarAlrevesEspacios.replaceAll(',', '');
    console.log(palabarAlreves);

    if(palabra === palabarAlreves){
        console.log("Son igaules alreves");
    }else{
        console.log("No lo son");
    }
   
}

//mismo metodo resumido
function ComprobarAlreves(palabra){
    let palabraAlreves = palabra.split('').reverse().join('');
    if (palabra === palabraAlreves) {
        console.log("Son iguales al revés");
    } else {
        console.log("No lo son");
    }
}

ComprobarAlreves("ada");
