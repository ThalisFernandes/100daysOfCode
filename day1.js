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


let nomes = ['maria', "mara", 'paulo', 'jose','jose', 'maria','mara','julia', 'pedro', 'antonio', 'jose'];

let repeticoes = nomes.reduce((acc, vlrAtual)=> {
    if(nomes[vlrAtual] in acc){
        acc[vlrAtual] ++
    } else{
        acc[vlrAtual] = 1 
    }
    return acc 
}, {});

/**
 * no retorno desse reduce deve retornar um dicionario contendo os nomes e a quantidade de repeticoes de cada nome
 * {'maria': 2, 'mara': 2 ...};
*/
