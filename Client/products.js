const getProducts = async() => {
    const productContainer = document.querySelector(".products-center")
const url = "http://localhost:3006/products";
 const getProducts = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const products = await getProducts.json()

    for(let item of products){
        console.log(item)
        const article = document.createElement("article")
        const imgcontainer = document.createElement("div")
        const img = document.createElement("img")
        const bagbutton = document.createElement("button")
        const addToCart = document.createElement("i")
        const h3 = document.createElement("h3")
        const anotherh3 = document.createElement("h3")
        const h4 = document.createElement("h4")

        bagbutton.innerHTML = item.id
        img.src = item.image
        h3.innerHTML = item.title
        article.append(img,h3,bagbutton)
        productContainer.append(article)
    }


}

getProducts()