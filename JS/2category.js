

let categories = [
    {
        id: 1,
        category_code: "DM001",
        category_name: "Quần áo",
        image: "",
        status: "ACTIVE",
        created_at: "2021-01-01T00:00:00Z",
    },
    {
        id: 2,
        category_code: "DM002",
        category_name: "Kính mắt",
        image: "",
        status: "INACTIVE",
        created_at: "2021-01-01T00:00:00Z",
    },
    {
        id: 3,
        category_code: "DM003",
        category_name: "Giày dép",
        image: "",
        status: "ACTIVE",
        created_at: "2021-01-01T00:00:00Z",
    },
    {
        id: 4,
        category_code: "DM004",
        category_name: "Thời trang nam",
        image: "",
        status: "INACTIVE",
        created_at: "2021-01-01T00:00:00Z",
    },
    {
        id: 5,
        category_code: "DM005",
        category_name: "Thời trang nữ",
        image: "",
        status: "INACTIVE",
        created_at: "2021-01-01T00:00:00Z",
    },
    {
        id: 6,
        category_code: "DM006",
        category_name: "Hoa quả",
        image: "",
        status: "INACTIVE",
        created_at: "2021-01-01T00:00:00Z",
    },
    {
        id: 7,
        category_code: "DM007",
        category_name: "Rau",
        image: "",
        status: "ACTIVE",
        created_at: "2021-01-01T00:00:00Z",
    },
    {
        id: 8,
        category_code: "DM008",
        category_name: "Điện thoại",
        image: "",
        status: "INACTIVE",
        created_at: "2021-01-01T00:00:00Z",
    }
];


//Gọi và chuyển đổi trạng thái
const in_active = [
    {
        key : "ACTIVE",
        value : "Đang hoạt động",
    },
    {
        key : "INACTIVE",
        value : "Ngừng hoạt động",
    },
];
function statusActive (status){
    let a = in_active.find(function(b){
        return b.key === status;
    });
    if (b){
        return b.value;
    }
}


//READ
function renderCategory(thamso){
    const tbody = document.querySelector(".category-tbody");
    tbody.innerHTML = "";

    thamso.forEach(function(a, index){
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${a.category_code}</td>
            <td>${a.category_name}</td>
            <td>${a.status}</td>
             <td>
                <button onclick="openEdit(${index})">Sửa</button>
                <button onclick="deleteCategory(${index})">Xoá</button>
            </td>
        `;
        tbody.appendChild(row);
    })
}
saveStorage();
loadStorage();
renderCategory(categories);

//Lưu localStorage & đóng mở thẻ modal - overlay
function saveStorage(){
    localStorage.setItem("categories", JSON.stringify(categories));
};

function loadStorage(){
    const dataLoading = localStorage.getItem("categories");
    if (dataLoading) {
        categories = JSON.parse(dataLoading);
    }
}

function openDisplay(){
    document.querySelector(".modal-overlay").style.display = "block";
    document.querySelector(".update-code-container").style.display = "flex";
}


function closeDisplay(){
    document.querySelector(".modal-overlay").style.display = "none";
    document.querySelector(".update-code-container").style.display = "none";
}


//Delete
function deleteCategory(index){
    categories.splice(index , 1);
    saveStorage();
    renderCategory(categories);
}
loadStorage();
renderCategory(categories);

//Update

let index = [];

function openEdit(index){
    editIndex = index;

    const abc = categories[index];

    document.querySelector(".code-category").value.trim() = abc.category_code;
    document.querySelector(".name-category").value.trim() = abc.category_name;
    
    const radios = document.querySelectorAll('input[name="status"]');
    radios.forEach(function(radio){
        if (radio.value === abc.status) {
            radio.checked = true;
        }
        openDisplay();
});
};


function handleUpdate(){
    if (editIndex === null)
        return;
    const code =  document.querySelector(".code-category").value;
    const name =  document.querySelector(".name-category").value;
    const checked =  document.querySelector('input[name="status"]').checked;
    const message = document.querySelector('.form-message');
    message.innerHTML = "";
    if (!code || !name || !checked){
        message.innerHTML = "Kiểm tra lại dữ liệu đã nhập"
        message.style.color = "red";
        return;
    }

    categories[index].category_code = code;
    categories[index].category_name = name;
    categories[index].status = checked.value;
    saveStorage();
    renderCategory(categories);
    closeDisplay;

    editIndex = null;
};
