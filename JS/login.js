    let users = [
        {
            id : 1,
            first_name :"NGUYỄN VĂN",
            last_name : "Nam",
            gender : 0,
            date_of_birth : "20/02/2023",
            address : "Thanh Xuân, Hà Nội",
            avatar : "http://ẽample.com/avatar.jpg",
            email : "nvnam@gmail.com",
            password : "123456",
            phone_number : "0988787671",
            created_at : "2021-01-01T00:00:00Z",
        }
    ];

    let categories = [
        {
            id : 1,
            category_code : "DM001",
            category_name : "Hoa quả",
            image : "https://example.com/image.jpg",
            status : "ACTIVE",
            created_at : "2021-01-01T00:00:00Z",
        },
        {
            id : 2,
            category_code : "DM002",
            category_name : "Rau củ",
            image : "https://example.com/image.jpg",
            status : "INACTIVE",
            created_at : "2021-01-01T00:00:00Z",
        },
    ];

    let products = [
        {
            id : 1,
            product_code: "SP001",
            product_name : "Táo",
            actegory_id : 1,
            stock : 100,
            price : 20000,
            discount : 0,
            image : "https://example.con/image.jpg",
            status : "ACTIVE",
            description : "Táo nhập khẩu từ Mỹ",
            created_at : "2021-01-01T00:00:00Z",
        },
        {
            id : 2,
            product_code: "SP002",
            product_name : "Cà chua",
            actegory_id : 2,
            stock : 100,
            price : 20000,
            discount : 0,
            image : "https://example.con/image.jpg",
            status : "ACTIVE",
            description : "Cà chua nhập khẩu từ Hà Lan",
            created_at : "2021-01-01T00:00:00Z",
        }
    ];

//Lưu mảng vào localStorage
    localStorage.setItem("users", JSON.stringify(users));

//Thực thi?
function handleLogin(){
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    const checkbox = document.querySelector(".input-checkbox").checked;
    const message = document.querySelector("#message");

    message.innerHTML = "";
    message.style.color = "";

    if (!email){
        message.innerHTML = "Vui lòng nhập lại email";
        message.style.color = "red";
        return;
    } else if (!password) {
        message.innerHTML = "Vui lòng nhập lại mật khẩu";
        message.style.color = "red";
        return;
    };
    //Lấy giá trị từ localStorage ra
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];

    const userFind = userLocal.find(function(user, index){
       return user.email === email && user.password === password; 
    });

    if (userFind){
        //Trước khi cho phép đăng nhập thành công "Cần lưu"
        localStorage.setItem("userLongIn", JSON.stringify(userFind))

        message.innerHTML = "Đăng nhập thành công";
        message.style.color = "green";

        window.location.href = "../dashboard.html";

    } else {
        message.innerHTML = "Email hoặc Mật khẩu không đúng";
        message.style.color = "red";
    }
};
 
//??????? Chưa thể truy cập vaò dashboard.html ????

    //     Nhập email & password
    //         ↓
    // JS lấy dữ liệu
    //         ↓
    // So sánh với localStorage
    //         ↓
    // Đúng → lưu  → chuyển trang
    // Sai  → alert lỗi