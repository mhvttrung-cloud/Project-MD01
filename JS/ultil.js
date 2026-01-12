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


    // Hàm trả về chuỗi HTML của phần menu
function renderMenu(keyActive) {
  console.log("keyActive: ", keyActive);

  // Tạo 1 mảng danh sách các link trong menu
  const menuItems = [
    {
      key: "dashboard",
      name: "Thống kê",
      link: "./dashboard.html",
      icon: '<i class="fa-solid fa-house"></i>',
    },
    {
      key: "category-manager",
      name: "Quản lý danh mục",
      link: "./category-manager.html",
      icon: '<i class="fa-solid fa-list"></i>',
    },
    {
      key: "product-manager",
      name: "Quản lý sản phẩm",
      link: "./product-manager.html",
      icon: '<i class="fa-brands fa-product-hunt"></i>',
    },
  ];

  // Nối các chuỗi HTML trong Menu
  let menuHTML = `
    <div class="logo-image">
          <img src="../public/images/logo.png" alt="" />
        </div>

        <nav class="list-link">
  `;

  // Nối chuỗi kèm theo xử lý logic và gán các dữ liệu động
  menuItems.forEach(function (item) {
    menuHTML += `
          <a href="${item.link}" class="link-item ${
      keyActive === item.key ? "active" : ""
    }">
           ${item.icon}
            <span>${item.name}</span>
          </a>
    `;
  });

  menuHTML += `</nav>`;

  return menuHTML;
}