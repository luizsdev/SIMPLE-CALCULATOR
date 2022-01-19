

 function somar(){
        let a = parseInt(document.getElementById("numero1").value);
        let b = parseInt(document.getElementById("numero2").value);
        let c = document.getElementById("prg");
        let soma = a + b;
     c.innerHTML = "A soma é " + soma ;
 }
 function subtrair(){
    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);
    let c = document.getElementById("prg");
    let sub = a - b;
 c.innerHTML = "A subtração é " + sub ;
}
function multiplicar(){
    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);
    let c = document.getElementById("prg");
    let mult = a * b;
 c.innerHTML = "A multiplicação é " + mult ;
}
function dividir(){
    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);
    let c = document.getElementById("prg");
    let div = a / b;
 c.innerHTML = "A divisão é " + div ;
}


