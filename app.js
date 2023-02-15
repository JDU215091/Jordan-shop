import products from "./products.json" assert {type: 'json'};

const cart = [];

const products_conatiner = document.querySelector(".products-container")
const cart_items_container = document.querySelector(".cart-up-side")


products.forEach((product) => {
    products_conatiner.innerHTML += `
    <div class = "product">
        <img src = "./images/${product.image}" alt="">
        <div class="product-details">
             <div class="ptoduct-details-left-side">
                 <p class="product-name">${product.name}</p>
                 <p class="product-price">${product.price}</p>
              </div>
           <button class="btn" data-id="${product.id}">Add to cart</button>
        </div> 
        </div>
        `;
});




document.querySelectorAll(".btn").forEach(button=>{
    button.addEventListener('click', function(e){
        addToCart(this.dataset.id)
    })
})

function addToCart(id){
    let elem;
    for (let i = 0, len = products.length; i < len; i++) {
        if(products[i].id == id) {
            elem =  products[i];
            break;  
        }   
    }
    
    document.querySelector(".cart-item-right-side").innerHTML += `      
        <div class="small-cart">
            <img class="jpeg" src = "./images/${elem.image}">
            <div class="cart-content">
                ${elem.name}
                ${elem.price}
            </div>
            <div class="button"> 
                <button class = "delete"  data-id="${elem.id}">Delete</button>
            </div>
        </div>
    `

    document.querySelectorAll(".delete").forEach(btn => {
        btn.addEventListener('click', function(e){
            this.parentNode.parentNode.remove()
        })
    })
}








// const addToCartButtons = document.querySelectorAll(".products-details button")
// addToCartButtons.forEach((button) => {
//     button.addEventListener("click",(e)=>{
//         if(!cart.includes(e.target.dataset.id)){
//             cart.push(e.target.dataset.id);
//             renderCart();
//         }else{
//             alert("This item is selected")
//         }

//     });
// });

// function renderCart(){
//     if(cart.length == 0 ){
//         cart_items_container.innerHTML = "<h2>Your cart is empty</h2>"
//     }else{
//         cart_items_container.innerHTML = ""
//         cart.forEach((id)=>{
//             cart_items_container.innerHTML += `
//             <div class="cart-item d-flex justify-content-between">
//                         <div class="cart-item-left-side">
//                             <img src="./images/${products[id-1].image}" alt="">
//                         </div>
//                         <div class="cart-item-right-side p-2">
//                             <p class="cart-item-name">${products[id-1].name}</p>
//                             <p class="cart-item-price">${products[id-1].price}</p>
//                             <button>Remove item</button>
//                         </div>
//                     </div>
//             `
//         })
//     }
// }
// renderCart()
