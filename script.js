//hw1
// цельсии в фаренгейты
'use strict';
// {
//     let tC = parseInt(prompt('Введите значение температуры в цельсиях :'));
//     if (typeof tC == "number" & isNaN(tC) == false & tC != 0) {
//         let tF = (9 / 5) * tC + 32;
//         alert(tC + ' градуса по Цельсию - ' + tF + ' градусов по Фаренгейту.');
//     } else alert('Введите число отличное от нуля');
// }
// // 2 задание
// {
//     let admin='';
//     let name='';
//     name='Василий';
//     admin=name;
//     alert('Переменная "admin" = '+admin);
// }
//если сложить 1000 и "108", получится текстовая строка '1000108'

//hw2
//Task 1
{
    // var a = 1, b = 1, c, d;
    // c = ++a;
    // alert(c);       // 2 - двойка получается потому что инкремент для переменной "a" указан в префиксной форме
    //                 // это значит, что переменная "а" будет увеличиваться на 1 до вычисления выражения, где она
    //                 // используется алгоритм такой функция 'alert' тянет переменную "с" и до того как вывести "с"
    //                 // на экран "а" увеличивается на 1 - получаем 2
    // d = b++;
    // alert(d);       // 1- выводится единица, потому что инкеремент указан в постфиксной форме, фактически, на момент
    //                 // появления сообщения с единицей переменная "d" равна 2. Т.е. в этом случае сначала вызывается
    //                 // "alert" с "d" равной единицей, а после этого "b" инкрементируется на 1
    // c = (2 + ++a);
    // alert(c);       // 5 - переменная "а" в этом случае вызывается второй раз, после 26 строки "а" уже равна 2,
    //                 // и получается, когда в 35 строке мы обращаемся к переменной "с", "а" инкрементируется второй раз
    //                 //  и получаем 2 + 3 = 5
    // d = (2 + b++);
    // alert(d);       // 4 - к 2 прибавляется еще 2, а после этой математической операции "b" инкрементируется на 1,
    //                 // т.к. инкремент указан в постфиксной форме
    //
    // alert(a);       // 3 - переменная "а" равна 3, т.к. до этого вызывалась 2 раза : в 26 и 35 строке
    // alert(b);       // 3 - переменная "б" равна 3 , т.к. вызывалась 2 раза: в 39 и 31 строке
}
//Task 2
{
    // var a = 2;
    // var x = 1 + (a *= 2);
    // у умножения больший приоритет + там оно еще в скобках. поэтому сначала "а" умножится на 2, а потом к результату
    // прибавится 1 получится так:  1 + 2 * 2 = 5
}
//Task 3
{
    let a = -1;
    let b = 2;

    function processNum(a, b) {

        if (isNaN(a || b)) {
            alert('wrong input');
            return null;
        }
        const c = (a >= 0 && b >= 0) ? 'allP' : (a < 0 && b < 0) ? 'allN' : 'def';
        switch (c) {
            case 'allP':
                alert(`a - b = ${a - b}`);
                break;
            case 'allN':
                alert(`a * b = ${a * b}`);
                break;
            default:
                alert(`a + b = ${a + b}`);
        }
    }

    // processNum(a, b);
}
//Task 4
{
    let multiplicator = 15;
    let a = Math.floor(Math.random() * (multiplicator + 1));
    switch (a) {
        case multiplicator:
            ;
        case 0:
            alert('Попробуй еще раз');
            break;
        default:
            alert(`Последовательность от ${a} до ${multiplicator} :\n` + getSequence(a, multiplicator));
    }

    function getSequence(n, c) {
        let result = '';
        for (let start = n; start <= c; start++) {
            result += (start + ' ');
        }
        return result;
    }
}
//Task 5
{
    function addition(a, b) {
        if (isNaN(+a) || isNaN(+b)) return null;
        return +a + +b;
    }

    function subtraction(a, b) {
        if (isNaN(+a) || isNaN(+b)) return null;
        return +a - +b;
    }

    function multiplication(a, b) {
        if (isNaN(+a) || isNaN(+b)) return null;
        return +a * +b;
    }

    function division(a, b) {
        if (isNaN(+a) || isNaN(+b) || b === 0) return null;
        return +a / +b;
    }

//Task 6
    {
        function mathOperation(a, b, c) {
            switch (c) {
                case 'addition':
                case '+':
                    return addition(a, b);
                case 'subtraction':
                case '-':
                    return subtraction(a, b);
                case 'division':
                case '/':
                case ':':
                    return division(a, b);
                case 'multiplication':
                case '*':
                    return multiplication(a, b);
                default: {
                    alert('unsupported operation');
                    return null;
                }
            }
        }

        console.log('Task 6 - (a:3, b:4, division) = ' + mathOperation('3', 4, 'division'));
    }
}
//Task 7

//null не равно нулю, потому что ноль - это числовое значение ( тип "number" со значением 0),
// а null - это объект(по крайней мере type of так говорит),обозначающий ничто.

//Task 8
{
    function power(val, pow) {
        if (isNaN(+val) || isNaN(+pow)) return null;
        let result = Number();
        if (pow === 1) {
            return val * 1;
        }
        return result += val * power(val, pow - 1);
    }

    console.log('Task 8 - (2^3)  = ' + power(2, '3'));
}

