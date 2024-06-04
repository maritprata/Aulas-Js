//getElementById - elemento por id
let valor1 = document.getElementById('elemento1')
valor1.style.color = 'green'

//getElementsByClassName - elemento por classe
let valor2 = document.getElementsByClassName ('elemento2')[0]
valor2.style.color = 'purple'

//getElementsByTagName - elemento por nome da tag <li>
let valor3 = document.getElementsByTagName ('li')[1]
valor3.innerText = 'troquei o valor'

valor4 = window.document.querySelector ('#p1')
valor4.innerHTML = 'Aula DOM'

valor5 = window.document.querySelectorAll ('.p2')[0]
valor5.style.color = 'blue'