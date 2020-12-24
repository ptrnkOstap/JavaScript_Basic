'use strict';

//HW5
//Task 1,2
const chessBoard = {
    rows: 10,
    columns: 10,
    cellColor1: '#d18b46',
    cellColor2: '#ffcda0',
    cellHeight: '60px',
    rowTitles: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].reverse(),
    colTitles: ['1', '2', '3', '4', '5', '6', '7', '8'],
    setFigures(row, col, cell) {
        const icon = document.createElement('img');
        if (row === 3 || row === 8) {
            switch (row) {
                case 3:
                    icon.src = 'hw5-img/peshka_w.svg';
                    cell.appendChild(icon);
                    break;
                case 8:
                    icon.src = 'hw5-img/peshka.svg';
                    cell.appendChild(icon);
                    break;
            }
        }
        if (row === 2) {
            switch (col) {
                case 4:
                case 7:
                    icon.src = 'hw5-img/slon_w.svg';
                    cell.appendChild(icon);
                    break;
                case 2:
                case 9:
                    icon.src = 'hw5-img/ladya_w.svg';
                    cell.appendChild(icon);
                    break;
                case 8:
                case 3 :
                    icon.src = 'hw5-img/kon_w.svg';
                    cell.appendChild(icon);
                    break;
                case 6:
                    icon.src = 'hw5-img/ferz_w.svg';
                    cell.appendChild(icon);
                    break;
                case 5:
                    icon.src = 'hw5-img/korol_w.svg';
                    cell.appendChild(icon);
                    break;
            }
        }
        if (row === 9) {
            switch (col) {
                case 4:
                case 7:
                    icon.src = 'hw5-img/slon.svg';
                    cell.appendChild(icon);
                    break;
                case 2:
                case 9:
                    icon.src = 'hw5-img/ladya.svg';
                    cell.appendChild(icon);
                    break;
                case 8:
                case 3 :
                    icon.src = 'hw5-img/kon.svg';
                    cell.appendChild(icon);
                    break;
                case 6:
                    icon.src = 'hw5-img/ferz.svg';
                    cell.appendChild(icon);
                    break;
                case 5:
                    icon.src = 'hw5-img/korol.svg';
                    cell.appendChild(icon);
                    break;
            }
        }
    },
    renderChessBoard() {
        const chessTableTag = document.getElementById('Chess-board-table');

        for (let row = this.rows; row > 0; row--) {
            const tr = document.createElement('tr');
            chessTableTag.appendChild(tr);

            for (let col = this.columns; col > 0; col--) {
                let cell = document.createElement('td');
                cell.style.cssText = `width:${this.cellHeight}; height:${this.cellHeight}`;

                if ((col > 1 && row > 1) && (col < 10 && row < 10)) {
                    if ([2, 3, 8, 9].includes(row)) this.setFigures(row, col, cell);  //[2,3,8,9] - номера строк с фигурами
                    if ((row * 7 + col) % 2 !== 0) {
                        cell.style.backgroundColor = this.cellColor1; //нечетную ячейку красим в один цвет
                    } else {
                        cell.style.backgroundColor = this.cellColor2; // четную в другой
                    }
                } else { //верхний if разукрашивал поле доски,а этот else - устанавливает заголовки
                    cell.style.cssText += "font-weight:bold; font-size:2rem; text-align:center;";
                    if ((row === 1 || row === 10) && (col > 1 && col < 10)) cell.innerHTML = this.rowTitles[col - 2];
                    if ((col === 1 || col === 10) && (row > 1 && row < 10)) cell.innerHTML = this.colTitles[row - 2];
                }
                tr.appendChild(cell);
            }
        }
    }
}
//chessBoard.renderChessBoard();
//Task3
{
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
            },
            renderBasket(){
                const basketHTML=document.getElementById('shopping-cart-overview');
                if(this.products.length===0) {
                    basketHTML.insertAdjacentElement("beforebegin", document.createElement('div',{}).innerHTML='Корзина пуста')
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

}
