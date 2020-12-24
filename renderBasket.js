'use strict';
{
    const cart = {                    //корзина с массивом объектов и методом подсчета стоимости
        products: Array(),
        countCartPrice() {
            if (this.products.length === 0) return null;
            return this.products.reduce((total, curItem) => (total + curItem.price * curItem.quantity), 0);
        },
        countCartProducts() {
            if (this.products.length === 0) return null;
            return this.products.reduce(((total, currItem) => total + currItem.quantity), 0);
        },
        addProduct(pr) {
            const prodIndex = this.products.findIndex(p => p.article === pr.article);
            if (prodIndex !== -1) {
                this.products[prodIndex].quantity += pr.quantity;
            } else {
                cart.products.push(pr);
            }
        },
        removeProduct(prodArticle) {
            if (this.products.length === 0) return null;
            const prodIndex = this.products.findIndex(p => p.article === prodArticle);
            if (prodIndex !== -1) {
                this.products.splice(prodIndex, 1);
            }
        },
        renderProduct(product) {
            let productElement = document.createElement('li');
            productElement.classList.add('shopping-cart-overview-list-item');
            productElement.innerHTML = `
                    <div class="cart-product-details">
                        <div class="cart-product-details-img-col"><img alt="p1-img" src="img/shopping-cart-p1.png"></div>
                         <div class="cart-product-details-info-col">
                             <p class="cart-product-details-item-header"> ${product.title}</p>
                             <p class="cart-product-details-color">Color: <span class="product-color-value">red</span></p>
                            <p class="cart-product-details-size">Size: <span class="product-size">XII</span></p>
                         </div>
                     </div>
                     <p class="cart-product-price">$ ${product.price}</p>
                     <input class="cart-product-quantity" type="number" value=${product.quantity}>
                     <p class="cart-product-shipping">FREE</p>
                     <p class="cart-product-subtotal">$ ${product.price * product.quantity}</p>
                    <button class="cart-product-action")><i class="fa fa-plus-circle"  aria-hidden="true"></i></button>              
                   `;
            return productElement;
        },
        renderCart() {
            const binMessage = document.createElement("p");
            const cartContainer = document.querySelector('.shopping-cart-content-area-wrapper');

            if (this.products.length !== 0) {
                const cartList = document.createElement('ul');
                cartList.classList.add('shopping-cart-overview');
                cartContainer.insertAdjacentElement("afterbegin", cartList);

                const cartHeader = document.createElement('li');
                cartHeader.innerHTML = `
                            <ul class="shopping-cart-overview-header">
                                <li class="shopping-cart-overview-header-item">
                                    <p class="shopping-cart-overview-header-item-name">Product details</p>
                                </li>
                                <li class="shopping-cart-overview-header-item">
                                    <p class="shopping-cart-overview-header-item-name">unit Price</p>
                                </li>
                                <li class="shopping-cart-overview-header-item">
                                    <p class="shopping-cart-overview-header-item-name">Quantity</p>
                                </li>
                                <li class="shopping-cart-overview-header-item">
                                    <p class="shopping-cart-overview-header-item-name">shipping</p>
                                </li>
                                <li class="shopping-cart-overview-header-item">
                                    <p class="shopping-cart-overview-header-item-name">Subtotal</p>
                                </li>
                                <li class="shopping-cart-overview-header-item">
                                <p class="shopping-cart-overview-header-item-name">Action</p>
                               </li>
                           </ul>
                    `;
                cartList.insertAdjacentElement('afterbegin', cartHeader);

                this.products.forEach(p => cartList.insertAdjacentElement('beforeend', this.renderProduct(p)));

                binMessage.innerHTML = `${this.countCartProducts()} - product(s) of $ ${this.countCartPrice()}`;
                cartList.insertAdjacentElement("beforeend", binMessage);
                document.querySelector('.grand-total-value').innerHTML = "  $ " + this.countCartPrice();
                document.querySelector('.subtotal-value').innerHTML = "$" + this.countCartPrice();
            } else {
                cartContainer.innerHTML = '';
                binMessage.innerHTML = "Your cart is empty";
                cartContainer.insertAdjacentElement("beforeend", binMessage);
            }
        }
    }

    const product = {                  // сущность 1 продукта
        article: null,
        title: null,
        price: null,
        quantity: null
    }

    cart.addProduct({article: 333444, title: 'T-shirt', price: 10, quantity: 1});  //добавляем пару товаров
    cart.addProduct({article: 123854, title: 'Shorts', price: 15, quantity: 2});   //в виде объектов в корзину
    cart.addProduct({article: 123855, title: 'Trousers', price: 20, quantity: 1});
//
// cart.addProduct({article: 123854, title: 'Shorts', price: 15, quantity: 1});   //чекаем addProduct,добавив +1
// // уже существующего артикула
//
// cart.removeProduct(123854);   //пробуем удалить товар из корзины
//
// // выводим стоимость (20) и количество (2) товаров
    cart.renderCart();
}
