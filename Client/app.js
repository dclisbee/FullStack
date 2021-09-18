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
}

class Storage {

}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    products.getProducts().then(products => ui.displayProducts(products));
})