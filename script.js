'use strict';
//Home work #4
//Task1
{
    function numToStringObject(n) {
        //NaN, range, number check

        const rtnObject = {
            'единицы': null,
            'десятки': null,
            'сотни': null
        }

        for (let i = n.toString().length; n > 0; i--) {
            switch (i) {
                case 3:
                    rtnObject["единицы"] = (n %= 10);
                    break;
                case 2:
                    rtnObject["десятки"] = (n %= 10);
                    break;
                case 1:
                    rtnObject["сотни"] = (n %= 10);
                    break;
            }
        }

    }

    console.log(numToStringObject(23).toString());
}