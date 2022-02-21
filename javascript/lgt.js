/*===============ITEM================*/
const product = [
    { id: 1, name: "Chuột Logictech", img: "./img/mouse1.png", price: "990.000" },
    { id: 2, name: "Chuột Logictech", img: "./img/mouse2.png", price: "990.000" },
    { id: 3, name: "Chuột Logictech", img: "./img/mouse3.png", price: "990.000" },
    { id: 4, name: "Chuột Logictech", img: "./img/mouse4.png", price: "990.000" },
    { id: 5, name: "Chuột Logictech", img: "./img/mouse5.png", price: "990.000" },
    { id: 6, name: "Chuột Logictech", img: "./img/mouse6.png", price: "990.000" },
    { id: 7, name: "Chuột Logictech", img: "./img/mouse7.png", price: "990.000" }
];

let perPage = 10;   
let currentPage = 1;
let start = 0;
let end = perPage;

function renderProductLGT() {
    html = '';
    const content = product.map((item, index) => {
        if(index >= start && index < end) {
        html += '<div class="product-sales-item">';
        html += '<div class="img-warp">';
        html += '<a>';
        html += '<div class="img-warp-img"><img src='+ item.img +'>';
        html += '</div>';
        html += '</a>';
        html += '</div>';
        html += '<div class="sales-info">';
        html += '<div class="name">';
        html += '<a>'+ item.name +'</a>';
        html += '</div>';
        html += '<div class="price">';
        html += '<span>'+ item.price +' đ</span>';
        html += '</div>';
        html += '<a>';
        html += '<div class="sales-btn" onclick="addCart('+item.id+')">Thêm vào giỏ hàng</div>';
        html += '</a>';
        html += '</div>';
        html += '</div>';
        return html;
        }
    })

    document.getElementById('productLGT').innerHTML = html;
}

renderProductLGT();

let cart = [];
const addCart= (id) => {
    // console.log(id);
    
    // console.log(product);
    let cartStorage= localStorage.getItem("cart");
    if(cartStorage) 
        cart = JSON.parse(cartStorage);
    let products = product[id-1];
    let cartitem = cart.find(c => c.id == id);
    if(cartitem)
    {
        cartitem.quantity +=1;
    }
    else{
        cart.push({...products,quantity:1});
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    showCart(cart);
}

const showCart = (shoppingcart) =>{
    let cartBody = document.getElementById("header-bot-cart-show");
    console.log(cartBody);
    cartBody.innerHTML=``;
    shoppingcart.map(item => {
        cartBody.innerHTML+=`<div class="cart-box">
        <div class="cart-img">
            <div class="cart-warp-img"><img src="${item.img}" id="8" alt=""></div>
        </div>
        <div class="cart-sales-info">
            <div class="cart-name">
                <p>${item.name}</p>
                <span>${item.price}</span>
            </div>
            <div class="cart-remove-btn" onclick="removeCartItem(${item.id})">
                XÓA
            </div>
        </div>
    </div>`;
    })
}

const removeCartItem = (id) =>
{
    let cartStorage= localStorage.getItem("cart");
    if(cartStorage) 
        cart = JSON.parse(cartStorage);
    cart = cart.filter(e=> e.id != id);
    localStorage.setItem("cart",JSON.stringify(cart));
    showCart(cart);
}