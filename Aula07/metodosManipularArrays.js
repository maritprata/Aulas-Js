let alunos = ['Mari', 'Bia', 'Fabiano']
//                                 x y

console.log(alunos);

console.log("------- -------");
let nome1 = alunos.pop()
console.log(alunos);
console.log(nome1);

console.log("------- -------");
alunos.push('Guilherme')
console.log(alunos);

// shift() remove o elemento no início do array
// unshift() insere um elemento no início do array

console.log("------- -------");
let aluno2 = alunos.shift()
alunos.unshift(`Davi`)
console.log(alunos);