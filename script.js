function loadProducts (url) {
    fetch(url)
     .then(data => data.json())
     .then(item => {
        setProducts(item.products)
        console.log(item.nextPage)

        const nextPage = 'https://' + item.nextPage
        const btnLoadProduct = document.getElementById('moreProducts')
        btnLoadProduct.onclick = () => loadProducts(nextPage)

        
     })
}

function setProducts (products) {
    const $productsList = document.getElementById('productsList')

    products.forEach((product) => {
        $productsList.innerHTML += `
             <div class="product">
                 <div class="productImage">
                     <img src=${product.image} alt="">
                 </div>

                 <h4>${product.name}</h3>

                 <p>
                     ${product.description}
                 </p>

                 <ul>
                     <li>De: R$${product.oldPrice},99</li>

                     <li>Por: R$${product.price},99</li>

                     <li>ou ${product.installments.count}x de R$${product.installments.value}</li>
                 </ul>

                 <button>Comprar</button>
             </div>
        `
     })
}


loadProducts('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')