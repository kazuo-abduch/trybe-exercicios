// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

function exercicio1 () {

    let numeroLados = 5;
    let arrayQuadrado = [];

    for (let colunasCount = 0 ; colunasCount < numeroLados ; colunasCount++){
        arrayQuadrado.push('*');        
    }

    for (let linhasCount = 0 ; linhasCount <= numeroLados ; linhasCount++){
        console.log(arrayQuadrado.join(''))
    }
}

exercicio1();

function exercicio2 () {

    let numeroLados = 5;
    let arrayQuadrado = [];

    for (let colunasCount = 0 ; colunasCount < numeroLados ; colunasCount++){
        arrayQuadrado.push('*');  
        console.log(arrayQuadrado.join(''))      
    }
}

exercicio2();

function exercicio3 () {

    let numeroLados = 5;
    let arrayQuadrado = [];

    for(let colunasCount = 0 ; colunasCount < numeroLados ; colunasCount++){
        arrayQuadrado.push(' ');    
    }
    
    for(let triangCount = 0 ; triangCount<=numeroLados ; triangCount++){
        arrayQuadrado[numeroLados-triangCount] = '*';
        console.log(arrayQuadrado.join(''));
    }
    
}

exercicio3();

function exerciocio4 () {

    let numeroLados = 5;
    let arrayQuadrado = [];
    
    for(let colunasCount = 0 ; colunasCount < numeroLados ; colunasCount++){
        arrayQuadrado.push(' ');    
    }

    for (let triangCount = 0 ; triangCount < Math.ceil(numeroLados/2); triangCount ++){
        
        for(let numAsteriscos = 0 ; numAsteriscos <= triangCount ; numAsteriscos++){
            arrayQuadrado[Math.floor(arrayQuadrado.length/2)+numAsteriscos] = '*'
            arrayQuadrado[Math.floor(arrayQuadrado.length/2)-numAsteriscos] = '*'

        }
        
        console.log(arrayQuadrado.join(''))
    }

}
exerciocio4();



