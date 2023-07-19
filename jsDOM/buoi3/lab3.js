const productList = [
    {
        id : 1,
        name : "Sản phẩm 1",
        price : 10000000,
        brand : "Samsung",
        thumbnail : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        rating : 4
    },
    {
        id : 2,
        name : "Sản phẩm 2",
        price : 11000000,
        brand : "Xiaomi",
        thumbnail : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        rating : 5
    },
    {
        id : 3,
        name : "Sản phẩm 3",
        price : 9000000,
        brand : "Apple",
        thumbnail : "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        rating : 4
    },
    {
        id : 4,
        name : "Sản phẩm 4",
        price : 20000000,
        brand : "Oppo",
        thumbnail : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        rating : 3
    },
    {
        id : 5,
        name : "Sản phẩm 5",
        price : 15000000,
        brand : "Vivo",
        thumbnail : "https://plus.unsplash.com/premium_photo-1670537995391-c8dc4da967ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        rating : 5
    }
]


  const row=document.querySelector(".row");
  const card_item=row.querySelector(".card-item");
    
 
  productList.forEach(
    x => {
        let y= card_item.cloneNode(true);
        row.appendChild(y);
        let h1=row.lastChild.querySelector("h1");
        h1.innerText=x.name;
        let images=row.lastChild.querySelector("img");
        images.setAttribute("src",`${x.thumbnail}`);
        let p=row.lastChild.querySelector(".brand");
        p.innerText= x.brand;
        let p2=row.lastChild.querySelector(".price");
        p2.innerText=x.price;
    }
  )
  row.removeChild(card_item);