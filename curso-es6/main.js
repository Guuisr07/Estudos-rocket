const arr = [ 1, 2, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2 ); //Arrow Functions, os melhores lugares para se usar uma arrow function e quando é necessario usar uma function anonima, que nao foi definida antes ou serve só pra uma determinada funçao 

console.log(newArr);

const teste = () => ({nome: 'Guilherme '}) //Outro metodo de criar funçoes com arrow function, retornando um objeto direto da function


console.log(teste());