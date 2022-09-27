/**
 * ##### DIA 1 #######
 * 
 * ME APROFUNDANDO MAIS EM METHODS PARA ARRAY EM JAVASCRIPT
 * 
 * 
 * REDUCE() 
 * 
 * sintaxe: 
 *   o reduce recebe uma função de callback para retornar o acumulador que é um parametro padrao 
 *  
 *  array.reduce((acc, vlrAtual)=>{
 *          
 *  }, vlrInicial);
 * 
 */



// contando elementos repetidos do array com reduce aaaa


// let nomes = ['maria', "mara", 'paulo', 'jose','jose', 'maria','mara','julia', 'pedro', 'antonio', 'jose'];

// let repeticoes = nomes.reduce((acc, vlrAtual)=> {
//     if(nomes[vlrAtual] in acc){
//         acc[vlrAtual] ++
//     } else{
//         acc[vlrAtual] = 1 
//     }
//     return acc 
// }, {});
/**
 * no retorno desse reduce deve retornar um dicionario contendo os nomes e a quantidade de repeticoes de cada nome
 * {'maria': 2, 'mara': 2 ...};
*/

/**
 * 
 * EXERCICIOS COM REDUCE
 */
//  let numbers = [10,20,30,40];

//  let soma = numbers.reduce((acc, vlrAtual)=> {
//         console.log(acc, '+', vlrAtual);
//         return acc += vlrAtual;
//  }, 0 );
// console.log(soma);

//Utilizando o reduce para somar os valores de x em uma array;
// let num = [{x: 1}, {x: 2}, {x: 4}, {x: 10}];
// let soma = num.reduce((acc, vlrAtual)=> acc + vlrAtual.x, 0);
// console.log(soma);

//Fazendo a redução de um array de arrays

// let arr = [[1,2], [3,4],[7,8], [10, 9],[5,6]];

// let redux = arr.reduce((acc, vlrAtual)=> acc.concat(vlrAtual),[]);
// console.log(redux);


let pessoas = [
    {nome: 'ze', idade : 15},
    {nome: 'marta', idade: 20},
    {nome: 'tenorio', idade: 10}
]

function agruparPpl(arr, propriedade){
   return  arr.reduce((acc, vlrAtual)=>{
        let chave = vlrAtual[propriedade];
        if(!acc[chave]){
            acc[chave] = [];
        } 
        acc[chave].push(vlrAtual)
        return acc;
        },{});
};

console.log(agruparPpl(pessoas, 'idade'));

