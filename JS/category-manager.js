

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
        "
        onclick="deleteIndex(${index})"><img class="icon-content" src="../IMG/icon/Button.png" alt="transh"></button>
        
        <button style="
            background : transparent;
            border : none;
        "
        onclick="openEdit(${index})"><img class="icon-content" src="../IMG/icon/Button (1).png" alt="pen"></button>
        </td>
        `;
        tbody.appendChild(rowTd);
    });
};
saveCategories();
renderCategory(categories);

//create
let createBtn = document.querySelector(".create-btn");
let addScreen = document.querySelector(".push-code-container");
let modalOverlay = document.querySelector(".modal-overlay");

createBtn.addEventListener("click", function(){
    addScreen.style.display = "block";
    modalOverlay.style.display = "block";
});

function closeModalOverlay (){
    document.querySelector(".update-code-container").style.display = "none";
    addScreen.style.display = "none";
    modalOverlay.style.display = "none";
}

let saveCreate = document.querySelector(".save-create");
saveCreate.addEventListener("click", function(){
    let codeInput = document.querySelector(".code-create").value;
    const nameInput = document.querySelector(".name-create").value;
    const statusChecked = document.querySelector('input[name="status"]:checked');
    
    const message = document.querySelector(".message");

    message.innerHTML = "";

    if (!codeInput ||!nameInput || !statusChecked){
        message.innerHTML = "Vui lòng nhập lại"
        return;
    }
    const status = statusChecked.value;

    categories.unshift({
        category_code : codeInput,
        category_name : nameInput,
        status : status,

    })
    saveCategories();
    loadCategories();
    renderCategory(categories);
    closeModalOverlay();
// Sau khi thêm mới lại không thể lưu trên màn hình nhỉ ? F5 => mất ????
    // restart thẻ form !!!
    document.querySelector(".push-code-container").reset();
});

//Delete
function deleteIndex(index){
    categories.splice(index, 1);
    saveCategories();
    renderCategory(categories);
};
loadCategories();
renderCategory(categories);

//edit tbody Mắc kẹt ở edit =(( WHY))


let editIndex = null;
function openEdit(index){
    
    editIndex = index;
    
    const ab = categories[index];
    
    document.querySelector(".code-update").value = ab.category_code;
    document.querySelector(".name-update").value = ab.category_name;
    
    const radio = document.querySelectorAll('input[name="status"]:checked').value;
    radio.forEach(function(jp){
        jp.checked = (radio.value === ab.status)
    });
    document.querySelector(".update-code-container").style.display = "flex";
}

function handleEdit(){
    if (editIndex === null) return;

    const codeUpdate = document.querySelector(".code-update").value.trim();
    const nameUpdate = document.querySelector(".name-update").value.trim();
    const statusRadio = document.querySelector('input[name="status"]:checked');

    if (!codeUpdate || !nameUpdate || !statusRadio){
        alert("Hãy nhập đầy đủ dữ liệu");
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

