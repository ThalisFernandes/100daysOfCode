# day 1 

## filter : 
	filter é um metodo que cria um novo array apartir do array fornecido, porém o
filter não altera o array que foi passado ele apenas gera um array novo.
 Sintaxe: 
   var newarr = arr.filter((e)=> e % 2 != 0)
 nesse exemplo iremos retornar apenas elementos que sejam impar; 
 podemos usar o filter para filtrar um array baseado num criterio de busca 
um exemplo procurando palavras que tenham a letra tal;
 let fruits = ["uva", "maça","melancia", "pera", "jabuticaba", "laranja"]
 `function searchFruits(query){
	return fruits.filter((e)=>{
		return e.toLowerCase().indexOf(query.toLowerCase()) > -1;
	}
}
 nessa busca iremos retornar as palavras que tiverem o que foi enviado como 
 parametro.

## Map
  map assim como filter n altera o array que foi utilizado porém sua função 
de callback pode sim alterar o array, com o map podemos iterar sobre arrays
passando pelos elementos a lista de elementos que vai ser iterada pelo map é 
gerada antes da primeira invocacão do callback, caso um elemento seja adicionado depois ele fica invisivel para o map


podemos utilizar o map de forma generica para situacoes onde
precisamos usar elementos genericos que n teremos total controle 
e saberemos apenas que sao iteraveis 
utilizando a sintaxe do [].map.call(elemento, function())

## reduce

assim como os demais metodos o reduce não altera o array que foi passado, mas ele não gera um novo array por padrão, ele retorna um valor único que é representado pelo parametro acc ou acumulador: 

### sintaxe do reduce : 
	array.reduce((acc, vlrAtual)={
		/*Comandos para ser executado*/	
	}, vlrInicial); 
	
	acc = acumulador esse é o valor que será retornado na ultima iteração;
	vlrAtual = o index do array em que vai começar a iteração do reduce, caso ele seja passado por um valor valido o vlrAtual vai começar por ele, caso não ele começara do index 1;
	
	
	
