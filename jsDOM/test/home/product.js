var products =[
    {
        id: 1,
        name: "Laptop Asus",
        description: "lorem ipsum",
        price: 20,
        category: "laptop",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 2,
        name: "Laptop Acer",
        description: "lorem ipsum",
        price: 19,
        category: "laptop",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 3,
        name: "Macbook",
        description: "lorem ipsum",
        price: 21,
        category: "laptop",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 4,
        name: "Iphone 13 pro max",
        description: "lorem ipsum",
        price: 30,
        category: "phone",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 5,
        name: "Samsung Galaxy S21",
        description: "lorem ipsum",
        price: 25,
        category: "phone",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 6,
        name: "Dell Inspiron",
        description: "lorem ipsum",
        price: 22,
        category: "laptop",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 7,
        name: "Sony Xperia 1 III",
        description: "lorem ipsum",
        price: 28,
        category: "phone",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 8,
        name: "HP Pavilion",
        description: "lorem ipsum",
        price: 23,
        category: "laptop",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 9,
        name: "OnePlus 9 Pro",
        description: "lorem ipsum",
        price: 27,
        category: "phone",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },{
        id: 10,
        name: "Lenovo ThinkPad",
        description: "lorem ipsum",
        price: 24,
        category: "laptop",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 11,
        name: "Google Pixel 6",
        description: "lorem ipsum",
        price: 26,
        category: "phone",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 12,
        name: "Acer Chromebook",
        description: "lorem ipsum",
        price: 18,
        category: "laptop",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 13,
        name: "Xiaomi Redmi Note 11",
        description: "lorem ipsum",
        price: 15,
        category: "phone",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 14,
        name: "Asus ZenBook",
        description: "lorem ipsum",
        price: 29,
        category: "laptop",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 15,
        name: "iPhone SE",
        description: "lorem ipsum",
        price: 17,
        category: "phone",
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },  
    {
        id: 16,
        name: "Apple AirPods 2",
        description: "lorem ipsum",
        price: 35,
        category: "accessory",
        img: "https://cdn-v2.didongviet.vn/files/media/catalog/product/t/a/tai-nghe-apple-airpods-2-2022-didongviet.png"
    },
    {
        id: 17,
        name: "Chuột không dây Logitech M185",
        description: "lorem ipsum",
        price: 12,
        category: "accessory",
        img: "https://cdn-v2.didongviet.vn/files/media/catalog/product/c/h/chuot-khong-day-logitech-m185-didongviet_2.jpg"
    },
    {
        id: 18,
        name: "Bàn phím cơ có dây",
        description: "lorem ipsum",
        price: 40,
        category: "accessory",
        img: "https://pro2.vina9.com/49239/2581519_843118.jpg"
    },
    {
        id: 19,
        name: "Wireless Mouse",
        description: "lorem ipsum",
        price: 27,
        category: "accessory",
        img: "https://cdn.tgdd.vn/Products/Images/86/229571/chuot-bluetooth-silent-rapoo-m500-xanh-duong-1-1-org.jpg"
    },
    {
        id: 20,
        name: "Pin sạc dự phòng Polymer 10000mAh 12W AVA+ DS609A",
        description: "lorem ipsum",
        price: 50,
        category: "accessory",
        img: "https://cdn.tgdd.vn/Products/Images/57/309433/pin-sac-du-phong-polymer-10000mah-12w-ava-ds609a-trang-1-3.jpg"
    }
];

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const product = products.find(prod => prod.id.toString() === productId);

if (product) {
    html=`<div class="product">
    <div class="product-img"><img src="${product.img}"></div>
    <div class="product-des">
        <h1>${product.name}</h1>
        <div class="price">$${product.price}</div>
        <div class="line-product"></div>
        <div class="descrip">${product.description}</div>
            <div class="quantity">
                <span class="qty-text">SL:</span><br>
                <div class="control">
                    <input type="number" id="quantity" name="quantity" min="0" value="1" max="10" class="quantity-input">
                </div>
            </div>
            <input type="submit" name="themgiohang" class="themgiohang" value="Thêm vào giỏ hàng">
    </div>
</div>`;
    $('#product-detail').html(html);
    
} 
else {

    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Product not found.';
    $('.product-detail').appendChild(errorMessage);
}
$('.themgiohang').on('click', function(){
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += Number($('#quantity').val());
    } else {
        cartItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity:Number($('#quantity').val()),
            img: product.img
        });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
}
);

    let related = ""
    $(document).ready(function() {
        products.forEach(function(x) {
            let product = products.find(prod => prod.id.toString() === productId);
            if(x.category == product.category && x.id.toString() != productId){
            related += `
            <a href="product.html?id=${x.id}"><div class="product1">
                <img src="${x.img}" alt="${x.name}">
                <h2>${x.name}</h2>
                <p>${x.description}</p>
                <p>Price: $${x.price}</p>
            </div></a> 
        `;

            }
        });
        console.log(related);
        $('.row').html(related);
    });
