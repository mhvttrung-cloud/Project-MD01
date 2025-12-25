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
        return;
    };
    if (!checkBox){
        alert("Vui lòng kiểm tra điều khoản ... và kích vào ô vuông");
        return;
    }

    if (password !== confirmPassword){
        message.innerHTML = "Mật khẩu không đúng";
        message.style.color = "red";
    };

    let users = JSON.parse(localStorage.getItem(users)) || [];

    let userFind = users.find(function(user){
        return user.email === email || user.lastName === lastName;
    })

    if (userFind) {
        message.innerHTML = "Tài khoản đã tồn tại"
        message.style.color = "red"
    } else {
        message.innerHTML = "Đăng ký thành công"
        message.style.color = "green"
    }
    // Lưu newUser vào trong localStorage
    let newUser = {
        fisrtsName,
        lastName,
        email,
        password,
    };

    users.push(newUser);
    localStorage.setItem("user", JSON.stringify(users))
    
    //Xoá toàn bộ khi đăng ký xong
    document.querySelector("#form").reset();

};
