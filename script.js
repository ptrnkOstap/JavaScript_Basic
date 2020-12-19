'use strict';
//Home work #4
//Task1
{
    function numToStringObject(n) {
        const rtnObject = {}
        //NaN, range, number check
        if (isNaN(+n) || (+n < 0 || +n > 999)) {
            console.log('Введите число от 0 до 999');
            return rtnObject;
        }
        const numArr = [...n.toString()].reverse();

        for (let i = 0; i < numArr.length; i++) {
            switch (i) {
                case 0:
                    rtnObject["единицы"] = +numArr[0];
                    break;
                case 1:
                    rtnObject["десятки"] = +numArr[1];
                    break;
                case 2:
                    rtnObject["сотни"] = +numArr[2];
                    break;
            }
        }
        return rtnObject;
    }
}
//Task 2
{
    const basket = {                    //корзина с массивом объектов и методом подсчета стоимости
        products: Array(),
        countBasketPrice() {
            if (this.products.length === 0) return null;
            return this.products.reduce((total, curItem) => (total + curItem.price * curItem.quantity), 0);
        },
        countBasketProducts() {
            if (this.products.length === 0) return null;
            return this.products.reduce(((total, currItem) => total + currItem.quantity), 0);
        },
        addProduct(pr) {
            const prodIndex = this.products.findIndex(p => p.article === pr.article);
            if (prodIndex !== -1) {
                this.products[prodIndex].quantity += pr.quantity;
            } else {
                basket.products.push(pr);
            }
        },
        removeProduct(prodArticle) {
            if (this.products.length === 0) return null;
            const prodIndex = this.products.findIndex(p => p.article === prodArticle);
            if (prodIndex !== -1) {
                this.products.splice(prodIndex, 1);
            }
        }
    }

    const Product = {                  // сущность 1 продукта
        article: null,
        title: null,
        price: null,
        quantity: null
    }
    basket.addProduct({article: 333444, title: 'T-shirt', price: 10, quantity: 2});  //добавляем пару товаров
    basket.addProduct({article: 123854, title: 'Shorts', price: 15, quantity: 1});   //в виде объектов в корзину

    basket.addProduct({article: 123854, title: 'Shorts', price: 15, quantity: 1});   //чекаем addProduct,добавив +1
                                                                                        // уже существующего артикула

    basket.removeProduct(123854);   //пробуем удалить товар из корзины

    // выводим стоимость (20) и количество (2) товаров
    console.log(`В вашей корзине ${basket.countBasketProducts()} товара(ов) на сумму ${basket.countBasketPrice()}`);
}