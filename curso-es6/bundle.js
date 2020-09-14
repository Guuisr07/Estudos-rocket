"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
}); //Arrow Functions, os melhores lugares para se usar uma arrow function e quando é necessario usar uma function anonima, que nao foi definida antes ou serve só pra uma determinada funçao 

console.log(newArr);

var teste = function teste() {
  return {
    nome: 'Guilherme '
  };
}; //Outro metodo de criar funçoes com arrow function, retornando um objeto direto da function


console.log(teste());
