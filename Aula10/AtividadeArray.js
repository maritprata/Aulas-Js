


console.log("--- Jogos Online ---");
jogos.forEach((jogo) => {
    console.log(`Jogos online: ${jogo}`);
});

console.log("--- --- --- --- --- --- --- --- ---");

console.log("--- Jogos Free ---");
jogos.forEach((jogo, indice) => {
    console.log(`Jogos Free: ${jogo}`);
    console.log(`Número em lista disponivel: ${indice}`);
    console.log(`--- --- --- --- --- --- --- --- ---`);
});
