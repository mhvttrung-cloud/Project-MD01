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


const active =[
    {
        key : "ACTIVE",
        value : "Đang hoạt động"
    },
    {
        key : "INACTIVE",
        value : "Ngừng hoạt động",
    },
];
function ACTIVE(status){
    let a = active.find(function(v){
        return v.key === status;
    });
    if (a){
        return a.value;
    };
    return "";
};
function saveCategories(){
    localStorage.setItem("categories", JSON.stringify(categories));
}
function loadCategories(){
    const data = localStorage.getItem("categories");
    if (data){
        categories = JSON.parse(data);
    };
};


//READ 
function renderCategory(list){
    let tbody = document.querySelector(".tbody-tr-push");
    tbody.innerHTML = "";
    
    list.forEach(function(item, index){
        const rowTd = document.createElement("tr");
        
        rowTd.innerHTML = `
        <td>${item.category_code}</td>

        <td>${item.category_name}</td>

        <td>${ACTIVE(item.status)}</td>

        <td>
        <button style="
            background : transparent;
            border : none;
            cursor : pointer;
        "
        onclick="deleteIndex(${index})"><img class="icon-content" src="../IMG/icon/Button.png" alt="transh"></button>
        
        <button style="
            background : transparent;
            border : none;
            cursor : pointer;
        "
        onclick="openEdit(${index})"><img class="icon-content" src="../IMG/icon/Button (1).png" alt="pen"></button>
        </td>
        `;
        tbody.appendChild(rowTd);
    });
};
loadCategories();
saveCategories();
renderCategory(categories);

//create
let createBtn = document.querySelector(".create-btn");
let addScreen = document.querySelector(".push-code-container")
let modalOverlay = document.querySelector(".modal-overlay");

function closeModalOverlay (){
    document.querySelector(".push-code-container").style.display = "none";
    addScreen.style.display = "none";
    modalOverlay.style.display = "none";
}
function openCreate(){
    addScreen.style.display = "block";
    modalOverlay.style.display = "block";
}


function inputCreate(){
    
    openCreate();
    let codeInput = document.querySelector(".code-create").value.trim();
    let nameInput = document.querySelector(".name-create").value;
    let statusChecked = document.querySelector('input[name=status]:checked');

    let message1 = document.querySelector(".message1");
    let message2 = document.querySelector(".message2");
    let message3 = document.querySelector(".message3");
    message1.innerHTML = "";
    message2.innerHTML = "";
    message3.innerHTML = "";


    if(!codeInput){
        message1.innerHTML = "Mã danh mục không được để trống"
        message1.style.color = "red"
        return;
    };
    
    if (codeInput === nameInput){
        message3.innerHTML = "Vui lòng nhập lại Mã và Tên"
        message3.style.color = "red"
        return;
    };
    
    if (!nameInput){
        message2.innerHTML = "Tên danh mục không được để trống"
        message2.style.color = "red"
        return;
    }
    categories.unshift(
        {
            category_name : nameInput,
            category_code : codeInput,
            status : statusChecked.value,
        }
    )
    saveCategories()
    renderCategory(categories);
    closeModalOverlay();
    document.querySelector("form").reset();
};



//Delete
function deleteIndex(index){
    categories.splice(index, 1);
    saveCategories();
    renderCategory(categories);
};
loadCategories();
renderCategory(categories);



//Edit

let editIndex = null;
function openEdit(index){
    
    editIndex = index;
    const ab = categories[index];

    document.querySelector(".update-code-container").style.display = "block";
    document.querySelector(".modal-overlay").style.display = "block"
    
    document.querySelector(".code-update").value = ab.category_code;
    document.querySelector(".name-update").value = ab.category_name;

    let radios = document.querySelectorAll('input[name="status"]');
        radios.forEach(function(radio){
        radio.checked = ab.status == radio.value
    })
}

function handleEdit(){
    if (editIndex === null) 
        return;
    
    let message = document.querySelector(".message4");
    message.innerHTML = "";

    const codeUpdate = document.querySelector(".code-update").value.trim();
    const nameUpdate = document.querySelector(".name-update").value.trim();
    let statusRadio = document.querySelectorAll('input[name="status"]:checked').value;
   

    if (!codeUpdate || !nameUpdate || !statusRadio){
        message.innerHTML = "Vui lòng check lại trạng thái !"
        message.style.color = "red"
        return;
    }

//Sử dụng ...categories[editIndex] để copy lặp lại trường
//categories[editIndex].category_code = codeUpdate
// ...
    categories[editIndex] = {
        ...categories[editIndex],
        category_code: codeUpdate,
        category_name: nameUpdate,
        status: statusRadio.value,
    };
    saveCategories();
    renderCategory(categories);

    document.querySelector(".update-code-container").style.display = "none";
    editIndex = null;
}

