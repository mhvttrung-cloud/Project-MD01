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
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([
        {
            firstName: "Nguyễn",
            lastName: "Nam",
            email: "test@gmail.com",
            password: "123456"
        }
    ])); console.log(users);
};




function hanldRegister(){
    const fisrtsName = document.querySelector(".form-div-input").value;
    const lastName = document.querySelector(".form-div-inputName").value;
    const email = document.querySelector(".form-input").value;
    const password = document.querySelector(".form-password").value;
    const confirmPassword = document.querySelector(".confirmPassword").value;
    const checkBox = document.querySelector(".check-box").checked;
    const message = document.querySelector(".message");
    message.innerHTML = "";
    message.style.color = "";
    
    if (fisrtsName === "" || lastName === "" || email === "" || password === "" ||confirmPassword === ""){
        alert("Hãy điền/check vào ô còn trống")
        return window.location.href = "../register.html";
    };
    if (!checkBox){
        alert("Vui lòng kiểm tra điều khoản ... và kích vào ô vuông");
       return window.location.href = "../register.html";
    }

    if (password !== confirmPassword){
        message.innerHTML = "Mật khẩu không đúng";
        message.style.color = "red";
        return;
    };

    let user = JSON.parse(localStorage.getItem(users)) || [];

    let userFind = user.find(function(user){
        return user.email === email || user.lastName === lastName;
    });

    if (userFind) {
        message.innerHTML = "Tài khoản đã tồn tại"
        message.style.color = "red"
    } else {
        message.innerHTML = "Đăng ký thành công"
        message.style.color = "green"
    };
    // Lưu newUser vào trong localStorage
    let newUser = {
        fisrtsName,
        lastName,
        email,
        password,
    };

    user.push(newUser);
    localStorage.setItem("user", JSON.stringify(user))
    
    //Xoá toàn bộ khi đăng ký xong
    document.querySelector("#form").reset();

};
