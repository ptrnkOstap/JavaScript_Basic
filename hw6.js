'use strict';
const catalog = {
    productsCatalog: [
        {article: 333444, title: 'T-shirt', price: 10, src: 'img/t-shirt.png'},
        {article: 123854, title: 'Shorts', price: 15, src: 'img/shorts.png'},
        {article: 123824, title: 'Pants', price: 15, src: 'img/pants.png'},
        {article: 123632, title: 'Boots', price: 15, src: 'img/boots.png'},
        {article: 123985, title: 'Hat', price: 15, src: 'img/black-hat.png'},
        {article: 323185, title: 'Coat', price: 50, src: 'img/coat.png'},
    ],
    productCatalogElement: null,
    cartContentsHint: null,
    placeToCart(productArticle) {
        const pushProductIndex = this.productsCatalog.findIndex(p => +productArticle === p.article);
        if (pushProductIndex !== -1) {
            cart.addProduct(this.productsCatalog[pushProductIndex]);
            console.log(cart.products);
            this.cartContentsHint.innerHTML = cart.getCartMessage();
        }
    },
    renderCatalogItem(product) {
        return `
             <div class="catalog-list-item">
                <img class="item-image" src="${product.src}" alt="${product.article}" width="250" height="280">
                <div class="item-title-area">
                    <div class="name-and-price">
                        <p class="item-name">${product.title}</p>
                        <p class="item-price">$ ${product.price}</p>
                    </div>
                    <button class="buy-btn">Buy</button>
              </div>
        `;
    },
    init() {
        this.productCatalogElement = document.querySelector('.catalog-list');
        this.cartContentsHint = document.querySelector('.cart-contents');
        this.productCatalogElement.addEventListener('click', e => e.target.className === 'buy-btn' &&
            this.placeToCart(e.target.parentElement.parentElement.querySelector('.item-image').getAttribute('alt'))
        );
        this.productCatalogElement.addEventListener('click', e => {
            console.log(e.target.tagName);
            callViewCanvas();
        });
        this.renderCatalog();
    },
    renderCatalog() {
        this.productsCatalog.forEach(p => this.productCatalogElement.insertAdjacentHTML('afterbegin', this.renderCatalogItem(p)));
    }
}

const cart = {
    products: Array(),
    cartContainer: null,
    cartMessage: null,
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
            this.products[prodIndex].quantity++;
        } else {
            cart.products.push(Object.assign(pr, {quantity: 1}));
        }
        this.render();
    },
    removeProduct(prodArticle) {
        if (this.products.length === 0) return null;
        const prodIndex = this.products.findIndex(p => p.article === +prodArticle);
        if (prodIndex !== -1) {
            this.products.splice(prodIndex, 1);
            this.cartContainer.innerHTML = '';
            this.render();
            catalog.cartContentsHint.innerHTML = this.getCartMessage();
        }
    },
    init() {
        this.cartContainer = document.querySelector('.cart-list');
        this.cartMessage = document.createElement('p');
        this.cartMessage.classList.add('cart-message');
        this.cartContainer.addEventListener('click', (e) => e.target.className === 'removeItem' && this.removeProduct(e.target.alt));
        this.render();
    },
    renderCartElement(product) {
        return `
              <div class="cart-list-item">
                  <p class="cart-list-item-name">${product.title}</p>
                  <p class="cart-list-item-quantity">$ ${product.price}</p>
                  <p>x</p>
                  <p class="cart-list-item-price">${product.quantity} </p>
                  <p class="cart-list-item-subtotal">${product.quantity * product.price}</p>
                  <img class="removeItem" src="img/download.png" alt="${product.article}"  width="30" height="30">
              </div>
                `
    },
    getCartMessage() {
        return this.products.length === 0 ?
            'Your cart is empty' :
            `${this.countCartProducts()} - product(s) in your cart, $ ${this.countCartPrice()}`;
    },
    render() {
        if (this.products.length === 0) {
            this.cartMessage.innerHTML = this.getCartMessage();
            this.cartContainer.insertAdjacentElement('beforeend', this.cartMessage);
        } else {
            this.cartContainer.innerHTML = '';
            this.products.forEach((p) => this.cartContainer.insertAdjacentHTML('afterbegin', this.renderCartElement(p)));
            this.cartMessage.innerHTML = this.getCartMessage();
            this.cartContainer.insertAdjacentElement("beforeend", this.cartMessage);
        }
    }
}

const product = {                  // сущность 1 продукта
    article: null,
    title: null,
    price: null,
    quantity: null
}

catalog.init();
cart.init();


