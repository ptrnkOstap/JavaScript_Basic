//hw1
// цельсии в фаренгейты
'use strict';
{
    let tC = parseInt(prompt('Введите значение температуры в цельсиях :'));
    if (typeof tC == "number" & isNaN(tC) == false & tC != 0) {
        let tF = (9 / 5) * tC + 32;
        alert(tC + ' градуса по Цельсию - ' + tF + ' градусов по Фаренгейту.');
    } else alert('Введите число отличное от нуля');
}
// 2 задание
{
    let admin='';
    let name='';
    name='Василий';
    admin=name;
    alert('Переменная "admin" = '+admin);
}
//если сложить 1000 и "108", получится текстовая строка '1000108'

