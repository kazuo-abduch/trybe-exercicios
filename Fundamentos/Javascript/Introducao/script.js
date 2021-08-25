
function exercicio1(){
    //Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
    // Adição (a + b)
    // Subtração (a - b)
    // Multiplicação (a * b)
    // Divisão (a / b)
    // Módulo (a % b)
    // *Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉

    let a = 10;
    let b = 5;

    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);

}

function exercicio2 (){
    // Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

    let a = 10;
    let b = 5;

    if(a>b){
        console.log(a);
    }else if (b>a){
        console.log(b);
    }else {
        console.log('números iguais');
    }
}

function exercicio3 (){
    // Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

    let a;
    let b;
    let c;

    if(a > b && a > c){
        console.log(a)
    }else if(b > a && b > c){
        console.log(b)
    }else if(C > a && c > b){
        console.log(c)
    }else {
        console.log("temos alguns números iguais")
    } 
}

function exercicio4 (){
    // Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

    const number = -10;

    if(number > 0){
        console.log('positivo');
    }else if (number == 0){
        console.log('zero');
    }else {
        console.log ('negativo');
    }

}

function exercicio5 (){
    // Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
    // Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
    // Um ângulo será considerado inválido se não tiver um valor positivo.

    const a = 90;
    const b = 30;
    const c = 60;

    if (a <= 0 || b <= 0 || c <= 0){
        console.log('ângulo inválido')
    }

    if (a+b+c == 180){
        console.log(true);
    }else {
        console.log(false);
    }
}

function exercicio6 (){
    // Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
    // Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    // Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
    // Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
    // Exemplo: bishop (bispo) -> diagonals (diagonais)

    let peçadexadrez = 'Peão';
    let peçaToLowerCase = peçadexadrez.toLocaleLowerCase();

    if(peçaToLowerCase == 'bispo'){
        console.log('Bispo se movimenta nas diagonais');

    }else if (peçaToLowerCase == 'peão'){
        console.log('Peão se movimenta para frente, mas come na diagonal fronta adjacente');

    }else if (peçaToLowerCase == 'cavalo'){
        console.log('Cavalo se movimenta em L');

    }else if (peçaToLowerCase == 'torre'){
        console.log('Torre se movimenta em linhas retas');
        
    }else if (peçaToLowerCase == 'rainha'){
        console.log('Rainha se movimenta em qualquer direção');

    }else if (peçaToLowerCase == 'rei'){
        console.log('Rei se movimenta em qualquer direção, porém, apenas 1 quadrado');

    }else {
        console.log('esta peça não existe no xadrez');
    }
}

function exercicio7 (){
    // Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
    // Porcentagem >= 90 -> A
    // Porcentagem >= 80 -> B
    // Porcentagem >= 70 -> C
    // Porcentagem >= 60 -> D
    // Porcentagem >= 50 -> E
    // Porcentagem < 50 -> F
    // O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

    let nota = 100;

    if(0 >= nota && nota < 50){
        console.log('nota F');
    }else if (60 > nota && nota >=50){
        console.log('nota E');

    }else if (70 > nota && nota >=60){
        console.log('nota D');
        
    }else if (80 > nota && nota >=70){
        console.log('nota C');
        
    }else if (90 > nota && nota >=80){
        console.log('nota B');
        
    }else if (nota >=90 && nota <= 100 ){
        console.log('nota A');
        
    }else if (nota < 0 || nota > 100){        
        console.log('nota inválida');
    }

}

function exercicio8 (){
    // Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
    // Bonus: use somente um if .

    const n1 = 4;
    const n2 = 2;
    const n3 = 6;

    if (n1%2 == 0 || n2%2 == 0 || n3%2 == 0){
        console.log('true')
    }else {
        console.log('false')
    }
    
}

function exercicio9 (){
    // Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
    // Bonus: use somente um if .

    const n1 = 3;
    const n2 = 1;
    const n3 = 7;

    if (n1%2 == 1 || n2%2 == 1 || n3%2 == 1){
        console.log('true')
    }else {
        console.log('false')
    }
    
}

function exercicio10 (){
    // Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
    // Atente que, sobre o custo do produto, incide um imposto de 20%.
    // Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
    // O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
    // valorCustoTotal = valorCusto + impostoSobreOCusto
    // lucro = valorVenda - valorCustoTotal (lucro de um produto)

    let valorVenda = 100;
    let valorCusto = 50;

    if(valorVenda <= 0 || valorCusto <= 0 ){
        console.log('um ou mais valores inválidos');
    }else {
        console.log('Lucro de ', (valorVenda - ( valorCusto + (valorCusto * 0.2) )) * 1000, 'ao vender 1000 unidades')
    }
    
}

function exercicio11 (){
    // Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
    // A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
    // INSS (Instituto Nacional do Seguro Social)
    // Salário bruto até R$ 1.556,94: alíquota de 8%
    // Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
    // Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
    // Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    // IR (Imposto de Renda)
    // Até R$ 1.903,98: isento de imposto de renda
    // De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
    // De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
    // De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
    // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
    // Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
    // O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
    // Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
    // Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
    // R$ 2.670,00: salário com INSS já deduzido;
    // 7.5%: alíquota de imposto de renda;
    // R$ 142,80 parcela a se deduzir do imposto.
    // Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
    // O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
    // Resultado: R$ 2.612,55.
    // Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
    
    const salario = 4000;
    
    let impostoRenda;
    let impostoINSS;

    if(salario <= 1556.94){
        impostoINSS = salario*0.08;

    }else if(salario > 1556.94 && salario <= 2594.92 ){
        impostoINSS = salario*0.09;

    }else if (salario > 2594.92 && salario <= 5189.82){
        impostoINSS = salario*0.11;

    }else if (salario > 5189.82){
        impostoINSS = 570.88
    }

    if(salario <= 1903.98){
        impostoRenda = 0;
    }else if (salario > 1903.98 && salario <= 2826.65){
        impostoRenda = salario*0.075 - 142.8;
    }else if (salario > 2826.65 && salario <= 3751.05){
        impostoRenda = salario*0.15 - 354.80;
    }else if (salario > 3751.05 && salario <= 4664.68){
        impostoRenda = salario*0.225 - 636.13;
    }else if (salario > 4664.68){
        impostoRenda = salario*0.275 - 869.36
    }

    console.log('Seu salário líquido é de R$',salario - impostoRenda - impostoINSS);
}

console.log(exercicio11());
