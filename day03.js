/**
 * OBJECT PROTOTYPE INHERITANCE
 * 
 * https://www.youtube.com/watch?v=7oNWNlMrkpc
 * 
 */

function protTest(vlr2){
    this.vlr1 = 50;
    this.vlr2 = vlr2

    this.showcount= ()=>{
        return this.vlr2 * this.vlr1;
    }
}

/**
 * Toda função no javascript atua como um construtor, fazendo com que assim possam ser criados outros objetos
 * a partir de uma função
 */

/**
 * porem utilizando o protorype podemos atribuir funções para o objeto inicial, e ainda assim utilizar 
 * elas no objeto criado pois quando esse methodo foi invocado, o objeto vai olhar para o objeto pai
 * se ele possui esse methodo no prototype dele caso não ele vai olhar no "pai do pai", até achar esse methodo
 */

protTest.prototype.dividir = ()=>{
    return this.vlr1
}
var teste = new protTest(10);

console.dir(teste)