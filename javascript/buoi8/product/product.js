// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
}

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
function SumMoney(products){
let totalAmount = 0;

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    totalAmount += product.price * product.count;
}
console.log("Tổng tiền: " + totalAmount);
}
SumMoney(products);



// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
function Apple(products) {
    let appleProducts = [];

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product.brand === "Apple") {
        appleProducts.push(product);
    }
}
console.log("Các sản phẩm của thương hiệu Apple:");
console.log(appleProducts);
}
Apple(products);
// 4. Tìm các sản phẩm có giá > 20000000
function PriceF(products,x){
    let expensiveProducts = [];

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product.price > x) {
        expensiveProducts.push(product);
    }
}

console.log(expensiveProducts);
}
PriceF(products,20000000);
// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
function findPro(){
    let proProducts = [];

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product.name.toLowerCase().includes("pro")) {
        proProducts.push(product);
    }
}
console.log("Các sản phẩm có chữ 'pro' trong tên:");
console.log(proProducts);
}
findPro();
// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
let newProduct = {
    name: "Google Pixel 6",
    price: 25000000,
    brand: "Google",
    count: 1
};

products.push(newProduct);

console.log(products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
function deletePrd(){
    for (let i = products.length - 1; i >= 0; i--) {
        if (products[i].brand === "Samsung") {
            products.splice(i, 1);
        }
    }
    console.log(products);
    
}
deletePrd();
// 8. Sắp xếp giỏ hàng theo price tăng dần
function sortPrice(){
    products.sort((a, b) => a.price - b.price);
    console.log(products);

}
sortPrice();
// 9. Sắp xếp giỏ hàng theo count giảm dần
function sortCount(){
    products.sort((a, b) => b.count - a.count);
    console.log(products);
}
sortCount();
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
function random(){
    let randomProducts = [];

    while (randomProducts.length < 2 && products.length > 0) {
        let randomIndex = Math.floor(Math.random() * products.length);
        randomProducts.push(products.splice(randomIndex, 1)[0]);
    }
    console.log("2 sản phẩm ngẫu nhiên trong giỏ hàng:");
    console.log(randomProducts);
}
random();

