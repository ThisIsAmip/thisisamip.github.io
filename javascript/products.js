/*===============ITEM================*/
const product = [
    { id: 1, name: "Chuột Logictech", img: "./img/mouse1.png", price: "990.000" },
    { id: 2, name: "Chuột Logictech", img: "./img/mouse2.png", price: "990.000" },
    { id: 3, name: "Chuột Logictech", img: "./img/mouse3.png", price: "990.000" },
    { id: 4, name: "Chuột Logictech", img: "./img/mouse4.png", price: "990.000" },
    { id: 5, name: "Chuột Logictech", img: "./img/mouse5.png", price: "990.000" },
    { id: 6, name: "Chuột Logictech", img: "./img/mouse6.png", price: "990.000" },
    { id: 7, name: "Chuột Logictech", img: "./img/mouse7.png", price: "990.000" },

    { id: 8, name: "Chuột Lazer", img: "./img/mouse8.png", price: "1.100.000" },
    { id: 9, name: "Chuột Lazer", img: "./img/mouse9.png", price: "1.100.000" },
    { id: 10, name: "Chuột Lazer", img: "./img/mouse10.png", price: "1.100.000" },
    { id: 11, name: "Chuột Lazer", img: "./img/mouse11.png", price: "1.100.000" },
    { id: 12, name: "Chuột Lazer", img: "./img/mouse12.png", price: "1.100.000" },
    { id: 13, name: "Chuột Lazer", img: "./img/mouse13.png", price: "1.100.000" },
    { id: 14, name: "Chuột Lazer", img: "./img/mouse14.png", price: "1.100.000" },

    { id: 15, name: "Chuột Ironseries", img: "./img/mouse15.png", price: "860.000" },
    { id: 16, name: "Chuột Ironseries", img: "./img/mouse16.png", price: "860.000" },
    { id: 17, name: "Chuột Ironseries", img: "./img/mouse17.png", price: "860.000" },
    { id: 18, name: "Chuột Ironseries", img: "./img/mouse18.png", price: "860.000" },
    { id: 19, name: "Chuột Ironseries", img: "./img/mouse19.png", price: "860.000" },
    { id: 20, name: "Chuột Ironseries", img: "./img/mouse20.png", price: "860.000" },

    { id: 21, name: "Chuột Atus", img: "./img/mouse21.png", price: "1.500.000" },
    { id: 22, name: "Chuột Atus", img: "./img/mouse22.png", price: "1.500.000" },
    { id: 23, name: "Chuột Atus", img: "./img/mouse23.png", price: "1.500.000" },
    { id: 24, name: "Chuột Atus", img: "./img/mouse24.png", price: "1.500.000" },
    { id: 25, name: "Chuột Atus", img: "./img/mouse25.png", price: "1.500.000" },

    { id: 26, name: "Chuột Crosshair", img: "./img/mouse26.png", price: "450.000" },
    { id: 27, name: "Chuột Crosshair", img: "./img/mouse27.png", price: "450.000" },
    { id: 28, name: "Chuột Crosshair", img: "./img/mouse28.png", price: "450.000" },
    { id: 29, name: "Chuột Crosshair", img: "./img/mouse29.png", price: "450.000" },
    { id: 30, name: "Chuột Crosshair", img: "./img/mouse30.png", price: "450.000" }
];

let perPage = 10;   
let currentPage = 1;
let start = 0;
let end = perPage;

const btnNext = document.querySelector('.btn-fwd');
const btnPrev = document.querySelector('.btn-prev');
const toltalPages = Math.ceil(product.length / perPage);




function renderProduct() {
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

    document.getElementById('product').innerHTML = html;
}

renderProduct();


// function renderPageNum(){
//     let html = '';
//     html += `<li class = "active"><a>${1}</a></li>`;

//     document.getElementsById('number-page').innerHTML = html;
// }
// renderPageNum();


btnNext.addEventListener('click', () => {
    currentPage++;
    if (currentPage > toltalPages) {
        currentPage = toltalPages;
    }
    
    start = (currentPage - 1) * perPage       ;
    end = currentPage * perPage;

    renderProduct();    
})

btnPrev.addEventListener('click', () => {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    
    start = (currentPage - 1) * perPage       ;
    end = currentPage * perPage;

    renderProduct();    
})

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