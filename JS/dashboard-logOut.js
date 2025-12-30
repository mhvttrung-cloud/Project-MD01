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

localStorage.setItem("users", JSON.stringify(users));

const avatarBtn = document.querySelector(".logIn-Out");
const logoutBox = document.querySelector(".btn-log-out-none");
const logoutBtn = document.querySelector(".btn-logOut");


/* Click avatar → hiện / ẩn logout */
avatarBtn.addEventListener("click", function () {
    logoutBox.classList.toggle("show");
});

/* Click logout → xoá login & về trang login */
logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("userLogin");
    window.location.href = "../login.html";
});
