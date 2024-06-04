const calcularImc = () => {
let usuarioAltura = Number(document.querySelector('#altura').value)
let usuarioPeso = Number(document.querySelector('#peso').value)

let imc = usuarioPeso / (usuarioAltura * usuarioAltura);
let res = document.querySelector('#resultado')
res.innerHTML = `peso: ${imc}`

if (imc >= 18.5 && imc <= 24.9) {
    res.innerHTML = ("Você está saudável");
} else {
    res.innerHTML =("Você não está saudável");
}
}
