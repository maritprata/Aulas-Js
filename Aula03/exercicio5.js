let usuarioAltura = Number(prompt("Digite a sua altura em metros: "));
let usuarioPeso = Number(prompt("Digite o seu peso em quilogramas: "));

let imc = usuarioPeso / (usuarioAltura * 2);

if (imc >= 18.5 && imc <= 24.9) {
    alert("Você está saudável");
} else {
    alert("Você não está saudável");
}
alert("Seu IMC é: " + imc.toFixed(2));