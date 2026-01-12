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
            discount : 2,
            image : "https://example.con/image.jpg",
            status : "ACTIVE",
            description : "Cà chua nhập khẩu từ Hà Lan",
            created_at : "2021-01-01T00:00:00Z",
        },
        {
            id: 3,
            product_code: "SP001",
            product_name: "Iphone 12 Pro",
            category_id: 1,
            stock: 10,
            price: 12000000,
            discount: 0,
            image: "",
            status: "ACTIVE",
            description: "",
            created_at: "2021-01-01T00:00:00Z",
        },
        {
            id: 4,
            product_code: "SP002",
            product_name: "Samsung Galaxy X20",
            category_id: 1,
            stock: 100,
            price: 21000000,
            discount: 5,
            image: "",
            status: "INACTIVE",
            description: "",
            created_at: "2021-01-01T00:00:00Z",
        },
        {
            id: 5,
            product_code: "SP003",
            product_name: "Phone 8 Plus",
            category_id: 1,
            stock: 10,
            price: 5000000,
            discount: 0,
            image: "",
            status: "ACTIVE",
            description: "",
            created_at: "2021-01-01T00:00:00Z",
        },
        {
            id: 6,
            product_code: "SP004",
            product_name: "Iphone 14 Pro Max",
            category_id: 1,
            stock: 20,
            price: 25000000,
            discount: 2,
            image: "",
            status: "INACTIVE",
            description: "",
            created_at: "2021-01-01T00:00:00Z",
        },
        {
            id: 7,
            product_code: "SP005",
            product_name: "Oppo X3",
            category_id: 1,
            stock: 10,
            price: 2000000,
            discount: 5,
            image: "",
            status: "INACTIVE",
            description: "",
            created_at: "2021-01-01T00:00:00Z",
        },
        {
            id: 8,
            product_code: "SP006",
            product_name: "Iphone 16",
            category_id: 1,
            stock: 20,
            price: 20000000,
            discount: 3,
            image: "",
            status: "INACTIVE",
            description: "",
            created_at: "2021-01-01T00:00:00Z",
        },
        {
            id: 9,
            product_code: "SP007",
            product_name: "Iphone 7 Plus",
            category_id: 1,
            stock: 10,
            price: 4000000,
            discount: 4,
            image: "",
            status: "ACTIVE",
            description: "",
            created_at: "2021-01-01T00:00:00Z",
        },
        {
            id: 10,
            product_code: "SP008",
            product_name: "Samsung S20 Ultra",
            category_id: 1,
            stock: 15,
            price: 30000000,
            discount: 2,
            image: "",
            status: "INACTIVE",
            description: "",
            created_at: "2021-01-01T00:00:00Z",
        },
    ];

    let object = [
        {
            key : "ACTIVE",
            value : "Đang hoạt động",
        },
        {
            key : "INACTIVE",
            value : "Ngừng hoạt động",
        },
    ];



    function statusActive(status){
        
      let a =  object.find(function(v){
            return v.key == status;
        });
        if (a){
            return a.value;
        } 
        return;
    }
 
function saveProducts(){
        localStorage.setItem("products", JSON.stringify(products));
    }
function loadProducts(){
    const data = localStorage.getItem(products);
    if (data){
        products = JSON.parse(data);
    };
};


let modalOverley = document.querySelector(".modal-overlay");
let clearScreen = document.querySelector(".box-none");

let deleteIndex = document.querySelector(".delete-index");
let editIndex = document.querySelector(".edit-index");

//READ
function displayUser(){
    const productList = document.querySelector(".productList");
    
    productList.innerText = "";
    
    products.forEach(function(product, index) {
        const row = document.createElement("tr");
        
        row.innerHTML = `
        <td>${product.product_code}</td>
        <td>${product.product_name}</td>
        <td>${product.price}</td>
        <td>${product.stock}</td>
        <td>${Number(product.discount)}%</td>
        <td>${statusActive(product.status)}</td>
        <td class="button">
        <button onclick="handleDelete(${index})" class="delete-index"><img class="icon-content" src="../IMG/icon/Button.png" alt="transh"></button>
        
        <button onclick="handleEdit(${index})" class="edit-index"><img class="icon-content" src="../IMG/icon/Button (1).png" alt="pen"></button>
        </td>
        `;
        productList.appendChild(row);
    });
}; 
loadProducts();
saveProducts();
displayUser();


//DELETE
               
let indexDelete = null;
let boxNone= document.querySelector(".box-none");

function handleDelete(index) {
    indexDelete = index;
    boxNone.style.display = "block";
}

document.querySelector(".delete-box-none").addEventListener("click", function () {
    products.splice(indexDelete, 1);

    saveProducts();
    displayUser(products);

    document.querySelector(".notify").style.display = "flex";
    
    boxNone.style.display = "none";
    setTimeout(function(){
        document.querySelector(".notify").style.display = "none"
    }, 2000);
});

    document.querySelector(".cancel").addEventListener("click", function () {
    boxNone.style.display = "none";
    });


//UPDATE

function handleEdit(index){
    editIndex = index;
    
    const product = products[index];
    console.log(products[index]);
    document.querySelector(".edit-parent").style.display = "block";
    document.querySelector(".modal-overlay").style.display = "block";

    document.querySelector(".edit-code").value = product.product_code;
    document.querySelector(".edit-name").value = product.product_name;
    document.querySelector(".edit-option").value = product.status;
    document.querySelector(".qty-input2").value = +product.stock;
    document.querySelector(".price-input2").value = +product.price;
    document.querySelector(".discount-input2").value = +product.discount;
    document.querySelector(".detail-input").value = product.description;
    document.querySelector(".img-input").value = product.image;

    console.log( document.querySelector(".qty-input").value);
    let statusText = statusActive(product.status);

    let radios = document.querySelectorAll('input[name="status"]');
    radios.forEach(function(radio){
        radio.checked = product.status == radio.value
    })

    loadProducts();
    displayUser();
};


function handleUpdateProduct(){
        // debugger;
    if (editIndex === null)
        return;

    // Loại trừ trường hợp Radio => checked
    let statusText = document.querySelector('input[name="status"]:checked').value

    if (statusText === "Đang hoạt động"){
        products[editIndex].status = "ACTIVE"
    }else {
        products[editIndex].status = "INACTIVE"
    };

    // Kiểm tra định dạng ảnh
    
    let imgUrl = document.querySelector(".img-input").value.trim();
    let message = document.querySelector(".message3")
    if (!isValidImageUrl(imgUrl)) {
        message.innerHTML = "Định dạng ảnh không hợp lệ";
        message.style.color = "red";
        return;
    };

    products[editIndex].product_code = document.querySelector(".edit-code").value;
    products[editIndex].product_name = document.querySelector(".edit-name").value;
    products[editIndex].stock = document.querySelector(".qty-input2").value;
    products[editIndex].price = document.querySelector(".price-input2").value;
    products[editIndex].discount = document.querySelector(".discount-input2").value;
    // products[editIndex].image = imgUrl;
    products[editIndex].description = document.querySelector(".detail-input").value;
    
    console.log(products[editIndex]);
    
    //Render
    saveProducts();
    loadProducts();
    displayUser(products);
    closeUpdate();
    
};
function closeUpdate(){
    document.querySelector(".edit-parent").style.display = "none";
    document.querySelector(".modal-overlay").style.display = "none";    
    editIndex = null;
}

//kiểm tra LINK dán

function isValidImageUrl(url){
    const e = url.split(".")

    const last = e[e.length-1];

    const urlImage = [
        "PNG", "JPG", "WebP"
    ];
    for (let i = 0; i <= urlImage; i++){
        if (last.toLowerCase() == i.toLowerCase()){
            return true;
        }
    } return false; 
}

//Thêm mới CREATE

document.querySelector(".menu-content button").addEventListener("click", createProduct);

function createProduct(){
    document.querySelector(".update-parent").style.display = "block";
    
    document.querySelector(".modal-overlay").style.display = "block";
}
function handleCreate(event){
    event.preventDefault();
    
    const codeInput = document.querySelector(".update-code").value;
    const nameInput = document.querySelector(".update-name").value;
    const qtyInput = document.querySelector(".qty-input").value;
    const priceInput = document.querySelector(".price-input").value;
    const discountInput = document.querySelector(".discount-input").value;
    const imageLinkInput = document.querySelector(".update-img-input input").value;
    const statusInput = document.querySelector(".checked").value;
    

    
    if (codeInput && nameInput && qtyInput && priceInput && discountInput && imageLinkInput){
        products.unshift({
            product_code : codeInput,
            product_name : nameInput,
            stock : qtyInput,
            price : priceInput,
            discount : discountInput,
            image : imageLinkInput,
            status : statusInput ? "ACTIVE" : "INACTIVE"
        });

        loadProducts();
        displayUser();
    } else {
        const message = document.querySelector(".message");
        message.innerHTML = "Vui lòng nhập lại";
        message.style.color = "red";
    };
    closeCreate();
};
function closeCreate() {
    document.querySelector(".update-parent").style.display = "none";
    document.querySelector(".modal-overlay").style.display = "none";
}


//Tên // mã sản phẩm không được giống nhau
//  dùng for => if kiểm tra products
function codeName(khac){
    code = products.product_code.toLowerCase();
    nameP = products.product_name.toLowerCase();

    if (code !== nameP) {
        return;
    } else {
        message.innerHTML = "Vui lòng nhập lại MÃ DANH SÁCH & TÊN DANH SÁCH"
        message.color = "red"
    }
}

//Lọc qua mảng Categories rồi sử dụng Filter kiểm tra thằng nào có status = option.value;
//Nên quy về value mình quy định !
// Kiểm tra lại toàn bộ HTML để tối ưu cho JS
//SEARCH
function handleSearch(event){
    // debugger;

    const search = event.target.value.toLowerCase();
    //Nếu không có search thì giữ nguyên !
    if (!search){
        displayUser(products);
        return;
    }
};
// Vì sao đến đoạn naỳ không thể lọc được nhỉ ?
//     const result = products.filter(function(a){
//     return (a.product_name.toLowerCase().includes(search) || a.status.toLowerCase().includes(search) || String(a.price).toLowerCase().includes(search));
// });
//     displayUser(result);

    //Tìm kiếm trạng thái !!!





