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
$('#search-item').on('click', function(){
    const category = $('#search-category').val();
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
