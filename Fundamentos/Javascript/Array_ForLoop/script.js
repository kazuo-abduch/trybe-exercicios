let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function exercicio1 (){
    // Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

    for (let i = 0; i < numbers.length; i++){
        console.log(numbers[i])
    }

}

function exercicio2 (){
    // Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum = numbers[i] + sum;
    }
    console.log(sum);
}

function exercicio3 (){
    // Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
    // A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum = numbers[i] + sum;
    }

    let mediaAr = sum/numbers.length;
    console.log(mediaAr)
    
}

function exercicio4 (){

    // Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum = numbers[i] + sum;
    }

    let mediaAr = sum/numbers.length;
    console.log(mediaAr)

    if(mediaAr > 20){
        console.log('Valor maior que 20')
    }else{
        console.log('Valor menor ou igual a 20')
    }
}

function exercicio5 (){
    // Utilizando for , descubra qual o maior valor contido no array e imprima-o;

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i]>numbers[i+1]){
            numbers[i+1] = numbers[i]
        }  
    }
    console.log(numbers[numbers.length-1]);

}

function exercicio6 () {

    // Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

    let numImpar=0;

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i]%2 == 1){
            console.log(numbers[i])
            numImpar++;
        }  
    }
    if(numImpar > 0){
        console.log(numImpar+' numeros impares')
    }else {
        console.log('nenhum número impar')
    }
}

function exercicio7 (){

    // Utilizando for , descubra qual o menor valor contido no array e imprima-o;

    let menorNum = 20;

    for (let i = 0; i < numbers.length; i++){

        if (numbers[i] <= menorNum){
            menorNum = numbers[i];
        }
        console.log(numbers[i])
    }

    console.log(menorNum);

}

function exercicio8 () {
    // Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
    let arrayNum = [];

    for (let i=1 ; i <= 25 ; i++){
        arrayNum.push(i);
    }
    console.log(arrayNum);
}

function exercicio9 (){
    // Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
    let arrayNum = [];

    for (let i=1 ; i <= 25 ; i++){
        arrayNum.push(i);
    }

    for (let i = 0 ; i<arrayNum.length ; i++){
        console.log(arrayNum[i]/2);
    }
}

exercicio1();
exercicio2();
exercicio3();
exercicio4();
exercicio5();
exercicio6();
exercicio7();
exercicio8();
exercicio9();