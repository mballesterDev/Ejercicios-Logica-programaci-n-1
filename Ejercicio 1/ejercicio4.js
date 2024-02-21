//Dado una palabra, buscarla en una frase y decir cuantas veces aparece
//la palabra en la frase





const miFuncion = (palabra) => {
    const frase = "Hola me llamo manel Hola Hola";
    let aparece = 0;

    let fraseDividida = frase.split(' ');
    

    for(let i =0; i<fraseDividida.length; i++){
        if (fraseDividida[i].includes(palabra)) {
            aparece++;
          }
    }

    console.log(`La palabra aparece ${aparece} veces!`);
   
  };
  
  miFuncion("Hola");