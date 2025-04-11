fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
    .then(data => data.json())
    .then((item) => {
        const btnLoadProduct = document.getElementById('moreProducts')
    
        setProducts(item.products)

        const nextPage = 'https://' + item.nextPage
        btnLoadProduct.onclick = () => loadProducts(nextPage)
    })

function loadProducts (product) {
    fetch(product)
     .then(data => data.json())
     .then(item => {
        setProducts(item.products)

        let nextPage = 'https://' + item.nextPage
        console.log(nextPage)
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