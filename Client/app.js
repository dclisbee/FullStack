const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCart = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');
const regButton = document.querySelector('#register');
const logButton = document.querySelector('#login');
const btns = document.querySelectorAll(".bag.btn");

let cart = [];

let buttonsDOM = [];

const createUser = async() => {
        const url = "http://localhost:3006/create_user";
        const userEmail = document.querySelector("#email").value;
        const userPassword = document.querySelector("#password").value;
        const userAccount = {
            userEmail,
            userPassword,
        }

        const createUsers = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userAccount),
        });
    }
    // regButton.addEventListener("click", () => {
    //     createUser();
    // })

const readToDo = async() => {
    let result = await fetch('URL');
    let data = await result.json();
    const url = "http://localhost:3006/get_user";
    const userAccount = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });

    //maybe need id to pick user
    const json = await userAccount.json(data.id);
    console.log(json)
}




class Products {


    async getProducts() {
        let result = await fetch('products.json');
        let data = await result.json();

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
                    <img src=${product.image} alt="product" class="product-image">
                    <button class="bag-btn" data-id=${product.id}>
                            <i class="fas fa-shopping-cart"></i>
                            add to cart
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
        const buttons = [...document.querySelectorAll('.bag-btn')];
        console.log(buttons)
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
                    let cartItem = {...Storage.getProduct(id), amount: 1 };
                    cart = [...cart, cartItem];
                    Storage.saveCart(cart);
                    //save cart into database somehow
                    this.setCartValues(cart);
                    //maybe use local storage as placeholder
                    this.addCartItem(cartItem);
                    this.showCart();
                })
            }
        })


    }
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
        cartDOM.classList.add('showCart');
    }
    setupAPP() {
        // cart = //check cart method from below 
        this.setCartValues(cart);
        this.populateCart(cart);
        cartBtn.addEventListener('click', this.showCart);
        closeCartBtn.addEventListener('click', this.hideCart);

    }
    populateCart(cart) {
        cart.forEach(item => this.addCartItem(item));
    }
    hideCart() {
        cartOverlay.classList.remove('transparentBcg');
        cartDOM.classList.remove('showCart');
    }
    cartLogic() {
        clearCartBtn.addEventListener('click', () => {
            this.clearCart();
            //remove callback function if issues ^
        });
        cartContent.addEventListener('click', event => {
            if (event.target.classList.contains('remove-item')) {
                //remove select item from database, may not need below code
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement);
                this.removeItem(id);
            } else if (event.target.classList.contains("fa-chevron-up")) {
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                //pass new cart values
                this.setCartValues(cart);

            }
        })

    }
    clearCart() {
        let cartItems = cart.map(item => item.id);
        //call remove from database for cart for all items
        cartItems.forEach(id => this.removeItem(id));
        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0]);
        }
        this.hideCart();
    }
    removeItem(id) {
        cart = cart.filter(item => item.id != id);
        this.setCartValues(cart);
        //show updated cart from database
        let button = this.getSingleButton(id);
        button.disabled = false;
        button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`

    }
    getSingleButton(id) {
        return buttonsDOM.find(button => button.dataset.id === id);
    }
}

//database call for products info that will be filled by products class
//getcart from database

class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem("products"));
        return products.find(product => product.id === id);
    }
    static saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}




document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    ui.setupAPP();
    products.getProducts().then(products => {
        ui.displayProducts(products);
        // .then(() => {ui.getBagButtons();
        Storage.saveProducts(products)
    }).then(() => {
        ui.getBagButtons();
    })
});