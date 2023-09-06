$('#category').on('click', function() {
    $('#category-list').toggleClass("d-block d-none");
});
$('.carousel').carousel();
let product = JSON.parse(localStorage.getItem('product'));
var productInter= [
    {
        id: "1",
        title: "Vầng Trăng Máu",
        author: "David Grann",
        nxb: "NXB Văn hóa - Văn nghệ",
        price: 70200,
        category: "Văn học",
        genre: ["Tiểu Thuyết"],
        img: "../../img/vangtrangmau.jpg",
        describe:  `Trong bối cảnh thế giới ngày nay, khi các nguồn nhiên liệu tái tạo được tôn vinh là nguồn nhiên liệu phát triển bền vững, không phát thải và thân thiện với môi trường, dầu mỏ cùng các nhiên liệu hóa thạch khác bị buộc tội là thủ phạm gây ra biến đổi khí hậu cùng hàng loạt các cáo buộc khác về ô nhiễm môi trường. Tiềm ẩn trong giá trị của dầu mỏ là quyền lực, có thể tác động và quyết định cục diện chính trị toàn cầu. Lịch sử thế giới ghi nhận nhiều cuộc chiến tranh đẫm máu quy mô lớn nổ ra đểgiành quyền kiểm soát tài nguyên được ví là “vàng đen” này.
        Vầng trăng máu là một công trình nghiên cứu khá tận tâm, cho thấy một góc nhìn về những cuộc chiến tranh giành dầu mỏ ở quy mô nhỏ, gói gọn trong phạm vi các ngôi làng quy hoạch dành cho những thổ dân bản địa châu Mỹ vào đầu những năm 1900. Cuốn sách phơi bày lịch sử đẫm máu trải dài nhiều thập kỷ, mà nạn nhân chính là một trong những bộ tộc thổ dân hùng mạnh nhất thời bấy giờ, những người Osage.
        Bị Chính phủ Mỹ buộc rời khỏi vùng đất rộng lớn màu mỡ sau cuộc Nội chiến, người Osage phải ly hương và định cư trên một vùng đất mới khô cằn không sức sống. Nhờ nguồn tài nguyên dầu mỏ nằm dưới những làng định cư này, trong cơn sốt dầu mỏ trên khắp nước Mỹ, người Osage trở thành những cư dân giàu có nhất thế giới. Từ cuộc sống săn bắt trong những căn lều gỗ nhỏ, từ gia sản gần như là hai bàn tay trắng, người Osage bỗng chốc có người hầu kẻ hạ, có xe hơi, dinh thự và tất cả những vật phẩm xa xỉ nhất thời bấy giờ. Dầu mỏ được coi như điềm phúc bất ngờ được ban tặng bởi Đấng tối cao mà người Osage luôn kính sợ, nhưng họ không ngờ rằng, nó cũng chính là điềm báo chết chóc bao trùm lên vận mệnh của toàn bộ tộc.
        Thông qua cuốn sách này, bạn đọc sẽ có thêm hiểu biết về những trang lịch sử đã bị xé nát một cách thô bạo, những con người vô tội bị đẩy ra bên rìa xã hội – không được công nhận, không được bảo vệ, không làm gì sai nhưng vẫn phải chịu ngược đãi, phân biệt và không được quyền đòi “công lý”. Như tựa đề của mục cuối cùng khép lại cuốn sách, đây quả thật là “lời khóc than của máu”!`
    },
    {
        id: "2",
        title: "Ác quỷ",
        author: "Vũ Khúc",
        nxb: "NXB Thanh Niên",
        price: 70200,
        category: "Văn học",
        genre: ["Tiểu Thuyết","trinh thám","kinh dị"],
        img: "../../img/acquy.jpg",
        describe: `Cái chết bất ngờ của người đồng nghiệp tên Long khiến tất cả nhân viên trong công ty không khỏi bàng hoàng và đau đớn. Thật kỳ lạ khi một người khỏe mạnh, sống điều độ như cậu ấy lại bất thình lình lăn đùng ra chết ngay tại văn phòng, bỏ lại sau lưng nhiều câu hỏi không ai biết lời giải đáp. Bẵng đi một thời gian, cái chết ban đầu được xác định là đột quỵ của Long đột ngột xuất hiện những chi tiết đáng ngờ. Sau khi tiến hành xét nghiệm pháp y, phía cảnh sát phát hiện ra thi thể của Long bị thiếu đi mất một chiếc răng và trong thi thể có chứa một lượng lớn hàm lượng thuốc giảm đau celecoxib. Liệu Long qua đời có phải do dùng quá liều thuốc giảm đau cơ hay trong chuyện này còn tiềm ẩn một âm mưu tinh vi khác? Tại sao người này lại bị thiếu mất một chiếc răng?
        Trong lúc cảnh sát vẫn còn đang đau đầu đi tìm lời giải thì nội bộ công ty xây dựng nhỏ nơi Long làm việc bắt đầu dậy sóng. Đạt – nhân viên nhút nhát, thường ngày chỉ biết cần mẫn làm việc bỗng chốc vụt sáng lên thành ngôi sao sáng trong công ty. Camera ngoài cổng công ty ghi lại được cuộc gặp gỡ khó hiểu giữa Long và Trưởng phòng vào 6h sáng ngày mà Long qua đời. Những cuộc nhậu bất tận khiến những tay nhân viên không biết giữ miệng vô tình để lộ những bí mật dơ bẩn. Câu chuyện càng lúc càng trở nên rắc rối. Những mối quan hệ dần được hé lộ, những xác chết mất răng vẫn liên tục xuất hiện, những vụ án mất tích càng ngày càng nhiều. Mục đích cuối cùng của tên sát nhân vô nhân tính đang ẩn mình trong bóng tối là gì vẫn không một ai hay biết.
        `
    },{
        id: "3",
        title: "Vật Lí 10  (Chân Trời Sáng Tạo) (2023)",
        author: "Nhiều Tác Giả",
        nxb: "Giáo Dục Việt Nam",
        price: 70200,
        category: "Sách giáo khoa",
        genre: ["Tiểu Thuyết","trinh thám","kinh dị"],
        img: "../../img/vatli10.jpg",
        describe: `Bộ sách giáo khoa lớp 10 Chân trời sáng tạo của Nhà xuất bản Giáo dục Việt Nam được tổ chức biên soạn nhằm đáp ứng lộ trình áp dụng sách giáo khoa mới được phê duyệt tại Nghị quyết 51/2017/QH14 của Quốc hội, sử dụng từ năm học 2022 – 2023.`
    },
    {
        id: "4",
        title: "Tủ Sách Tuổi Mới Lớn - Phù Sa Của Bầu Trời",
        author: "Hà Thanh Phúc",
        nxb: "Kim Đồng",
        price: 67500 ,
        category: "VĂN HỌC",
        genre: ["truyện ngắn"],
        img: "../../img/phu-sa-cua-bau-troi_bia.jpg",
        describe:`Những xúc cảm trong veo đầu đời xen lẫn nỗi buồn trưởng thành là điểm đặc sắc của tập truyện ngắn Phù sa của bầu trời. Theo từng trang viết của Hà Thanh Phúc, bạn sẽ tìm thấy những kí ức thân quen thời áo trắng, với những chuyện tình mới chớm đẹp tựa pha lê, những hờn giận bạn bè đáng nhớ, những chiêm nghiệm tinh khôi về tình thân, tình yêu quê hương xứ sở. Đó chính là phù sa sâu lắng bồi đắp cho hành trình lớn lên của mỗi người.
        `
    }
]

function renderUI() {
    let sachHay ="";
    
    for(let index = productInter.length-1; index >=0; index--){
        let price = formatCurrency(product[index].price);
        sachHay += ` <div class="col-lg-3 col-6">
        <a href="product.html?productId=${productInter[index].id}" style="text-decoration: none;">
        <div class="card" style="max-width: 18rem;">
            <img src="${productInter[index].img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${productInter[index].title}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${productInter[index].author}</li>
            </ul>
            <div class="card-body">
                <div class="price">${price}</div>
            </div>
        </div></a>
    </div>`;
    }
    $('#sach-hay .list-sach-hay').html(sachHay);
    let sachMoi=""
    for(let index = product.length-1; index >=0 && index >=product.length-4; index--){
        let price = formatCurrency(product[index].price);
        sachMoi += ` <div class="col-lg-3 col-6">
        <a href="product.html?productId=${product[index].id}" style="text-decoration: none;">
        <div class="card" style="max-width: 18rem;">
            <img src="${product[index].img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product[index].title}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${product[index].author}</li>
            </ul>
            <div class="card-body">
                <div class="price">${price}</div>
            </div>
        </div></a>
    </div>`;
    }
    $('.list-sach-moi').html(sachMoi);
    let sachBanChay = sachHay;
    $('.list-sach-ban-chay').html(sachBanChay);
}
renderUI();

function formatCurrency(number) {
    let newNumber= number;
    // Sử dụng toLocaleString để định dạng số và thêm dấu phân cách hàng nghìn
    return newNumber.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}