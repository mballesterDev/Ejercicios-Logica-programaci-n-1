//dado un número devuelve su tabla de multiplicar completa

let n1 = parseInt(prompt("Dime un número y te diré su tabla de multiplicar completa"));


for(let i =0; i<=10;i++){
    console.log(`${n1} * ${i} = ${n1*i}`);
}



function Tabla(numero){
console.log();
for(let i =0; i<=10;i++){
    console.log(`${numero} * ${i} = ${numero*i}`);
}
}

Tabla(9);
