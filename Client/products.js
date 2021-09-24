// const getProducts = async() => {
//     const productContainer = document.querySelector(".products-center")
// const url = "http://localhost:3006/products";
//  const getProducts = await fetch(url, {
//         method: "GET",
//         mode: "cors",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//     const products = await getProducts.json()

//     for(let item of products){
//         console.log(item)
//         const article = document.createElement("article")
//         const imgcontainer = document.createElement("div")
//         const img = document.createElement("img")
//         const bagbutton = document.createElement("h4")
//         const addToCart = document.createElement("button")
//         const h3 = document.createElement("h3")
//         const anotherh3 = document.createElement("h3")
//         const h4 = document.createElement("h4")
//         const button = document.createElement("button")
//         const text = document.createElement("i")

//         bagbutton.innerHTML = item.price
//         img.src = item.image
//         h3.innerHTML = item.title
//         button.className = 'bag-btn'
//         button.setAttribute('data-id' , `${item.id}`)
//         addToCart.className = "bag-btn"
        
//         const addCart = document.createTextNode("Add to cart");
//         text.appendChild(addCart);
//         const element = document.getElementsByClassName("bag-btn")
//         // element.appendChild(text)


//         article.append(img,h3,bagbutton,addToCart, text)
//         productContainer.append(article)
//     }


// }

// getProducts()