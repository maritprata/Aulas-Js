let nota1, nota2, nota3, nota4;

nota1 = Number(prompt(`Qual o valor da 1° nota?`));
nota2 = Number(prompt(`Qual o valor da 2° nota?`));
nota3 = Number(prompt(`Qual o valor da 3° nota?`));
nota4 = Number(prompt(`Qual o valor da 4° nota?`));

let soma = nota1 + nota2 + nota3 + nota4;
let media = soma / 4;

alert(`A média das notas é: ${media}`);


