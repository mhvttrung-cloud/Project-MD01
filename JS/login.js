function handleLogin(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");


    message.innerHTML = "";
    message.style.color = "";

    if (email === "" || password ===""){
        alert("Hãy điền Email hoặc Password")
        return;
    }
    //Lấy danh sách ra từ localStorage
        let users = JSON.parse(localStorage.getItem("users")) || []; 

    //Tìm user
    let userFind = users.find(function(user){
        return user.email === email || user.password === password;
    });
    if (userFind){
        message.innerHTML = "&#x2713;";
        message.style.color = "green";

        //Chuyển trang
        window.location.hrel = "../dashboard.html"
    } else {
        message.innerHTML = "Email hoặc Mật khẩu không đúng !"
        message.style.color = "red";
    }
    //Clear khi đăng nhập hoặc không đúng Email PW
    document.getElementById("email").value = "";
    document.getElementById("password").value ="";

};


//     Nhập email & password
//         ↓
// JS lấy dữ liệu
//         ↓
// So sánh với localStorage
//         ↓
// Đúng → lưu  → chuyển trang
// Sai  → alert lỗi