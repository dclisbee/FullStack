import swell from "/swell-js"
swell.init('digital-crafts', 'pk_66uRWvvReKdl2WnL9Su1ACfQBTvu0m1x	')


const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCart = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');


let cart = [];

let buttonsDOM = [];

class Products {


    //    API CALL HERE TO GET PRODUCTS
    async getProducts() {
        // let result = await fetch('URL');
        // let data = await result.json();
        await swell.products.list({
            category: 't-shirts', // Slug or ID
            limit: 25, // Max. 100
            page: 1
        })



        //ARRAY FROM API
        let products = data.items;
        products = products.map(item => {
            //FIELDS IS SUB ARRAY SECTION NAME
            const { title, price } = item.fields;
            //SYS IS ID SECTION
            const { id } = item.sys;
            //GET IMAGE LOCATION IN ARRAY
            const image = item.fields.image.fields.file.url;
            return { title, price, id, image }
        })
        return products;
    }
}

class UI {
    displayProducts(products) {
        let result = '';
        products.forEach(product => {
            result += `
            <article class="product">
                <div class="img-container">
                    <!--images of products-->
                    <img src=${product.image} alt="" class="product-image">
                    <button class="bag-btn" data-id=${product.id}>
                            <i class="fas fa-shopping-cart"></i>
                            add to bag
                    </button>
                </div>
            <h3>Title</h3>
                <h3>${product.title}</h3>
                <h4>$${product.price}</h4>
            </article>
            `;
        });
        productsDOM.innerHTML = result;
    }
    getBagButtons() {
            const buttons = [...document.querySelector('.bag-btns')];
            buttonsDOM = buttons;
            buttons.forEach(button => {
                let id = button.dataset.id;
                let inCart = cart.find(item => item.id === id);
                if (inCart) {
                    button.innerText = "In Cart";
                    button.disabled = true;
                } else {
                    button.addEventListener('click', (event) => {
                        event.target.innerText = "In Cart";
                        event.target.disabled = true;
                        //get product on click from api
                        let cartItem = //{...api.____(id), amount: 1};
                            cart = [...cart, cartItem];
                        //save cart into database somehow
                        this.setCartValues(cart);
                        //maybe use local storage as placeholder
                        this.addCartItem(cartItem);
                        this.showCart();
                    })
                }
            })


        }
        //place???
    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }
    addCartItem(item) {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
                    <img src=${item.image} alt="">
                    <div class="">
                        <h4>${item.title}</h4>
                        <h5>$${item.price}</h5>
                        <span class="remove-item" data-id=${item.id}>remove</span>
                    </div>
                    <div>
                        <i class="fas fa-chevron-up" data-id=${item.id}></i>
                        <p class="item-amount">${item.amount}</p>
                        <i class="fas fa-chevron-down" data-id=${item.id}></i>
                    </div>
        `
        cartContent.appendChild(div);

    }
    showCart() {
        cartOverlay.classList.add('transparentBcg');
        cart.DOM.classList.add('showCart');
    }

}

//database call for products info that will be filled by products class

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    products.getProducts().then(products => ui.displayProducts(products)).then(() => {
        ui.getBagButtons();

    });
})