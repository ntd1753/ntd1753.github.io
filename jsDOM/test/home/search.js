var product =[
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


function renderUI(listProduct = null){
    let html="";
    if(listProduct.length===0) {
        html="<li>chưa có sản phẩm nào trong giỏ hàng</li>";
    }
    else {
        html="";
        for (let i = 0; i <listProduct.length; i++) {
            html+=`  <li class="row">
            <div class="col left">
                <div class="thumbnail">
                    <a href="#">
                        <img src="${listProduct[i].img}" alt="" />
                    </a>
                </div>
                <div class="detail">
                    <div class="name"><a href="#">${listProduct[i].name}</a></div>
                    <div class="description">
                    ${listProduct[i].description}
                    </div>
                    <div class="price" >$${listProduct[i].price}</div>
                    <div id="category">${listProduct[i].category}</div>
                </div>
            </div>

            
        </li>`
        }
    }


$("#products").html(html);
}
$(document).ready(function(){

    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name');
    // Filter the products by name
    const productSearch = product.filter(item => {
        return item.name.toLowerCase().includes(productName.toLowerCase());
    });

    renderUI(productSearch);
});
$('#search-item').on('click', function(){
    const category = $('#search-category').val();
    console.log(category)
    const minPrice = parseFloat($('.min-price').val());
    const maxPrice = parseFloat($('.max-price').val());
    const name = $('#searchName').val().toLowerCase();
    const productSearch = product.filter(item => {
        const matchCategory = category === "" || item.category === category;
        const matchName = item.name.toLowerCase().includes(name);
        const matchMinPrice = isNaN(minPrice) || item.price >= minPrice;
        const matchMaxPrice = isNaN(maxPrice) || item.price <= maxPrice;
        return matchCategory && matchName && matchMinPrice && matchMaxPrice;
    });

    renderUI(productSearch);
})
$('.breadcrumb').children('li:first').on('click', function (){
    window.location.href='index.html';
})