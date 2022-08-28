(function(){

const products = [
{
    id:"1",
    title: "Tchibo Kaffeevollautomat",
    description: "Esperto Caffè, Anthrazit",
    image: "img/tchibo-kaffeevollautomat-esperto-caffe-anthrazit.webp",
    price: 219.00
},
{
    id:"2",
    title: "Tchibo Kaffeevollautomat",
    description: "Esperto Caffè, Ice Blue",
    image: "img/tchibo-kaffeevollautomat-esperto-caffe-ice-blue.webp",
    price: 219.00
},
{
    id:"3",
    title: "Tchibo Kaffeevollautomat",
    description: "Esperto Caffè, Silber",
    image: "img/tchibo-kaffeevollautomat-esperto-caffe-silber.webp",
    price: 219.00
}
];

function renderProducts (products){
    const productContainer = document.querySelector('.kaffeevollautomat_all');
    productContainer.innerHTML = '';
    for (const product of products){
        productContainer.innerHTML += `
        <div class="kaffeevollautomat_all">
        <div><img class="anthrazit" src="${product.image}" alt="${product.title}">
        <p class="kaffeevollautomat_header">${product.title}</p>
        <h4 class="kaffeevollautomat_type">${product.description}</h4>
        <h3 class="price">${product.price}</h3>
        </div>
        </div> `

    }
}

renderProducts(products);

})();