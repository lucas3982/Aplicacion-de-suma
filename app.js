let boton = document.getElementById('sumar');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click',hacerSuma);

function hacerSuma() {
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let s=n1+n2;
    respuesta.innerHTML=`La suma es ${s}`;
}