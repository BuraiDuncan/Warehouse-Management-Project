//warehouse-inventory project
const warehouseInfo = {
  WareHouse: "Electronics Digital",
  Location: "Nairobi",
  Manager: "Duncan Burai",
  Status: true,
  MaxStorage: 10000,
  CurrentProducts: 2500,
};

const productsCatalog = [
  {
    id: 1,
    model: "32A3KKEN",
    name: "Hisense 32D Frameless",
    category: "Televisions",
    price: 13500,
    qty: 200,
    supplier: "Hisense Electronics",
    reoderLevel: 50,
    activeStatus: true,
  },
  {
    id: 2,
    model: "43A4QKEN",
    name: "Hisense 43 Smart Frameless FHD (A4 series)",
    category: "Televisions",
    price: 23500,
    qty: 170,
    supplier: "Hisense Electronics",
    reoderLevel: 30,
    activeStatus: false,
  },
  {
    id: 3,
    model: "HS2100",
    name: "Hisense sondbar SH2100 200 watts",
    category: "Soundbars",
    price: 13000,
    qty: 200,
    supplier: "Hisense Electronics",
    reoderLevel: 60,
    activeStatus: true,
  },
  {
    id: 4,
    name: "Hisense Sound Bar 140 watts HS1800",
    category: "Soundbars",
    price: 10500,
    qty: 250,
    supplier: "Hisense Electronics",
    reoderLevel: 50,
    activeStatus: false,
  },
  {
    id: 5,
    model: "REF091DR",
    name: "Hisense Fridge 91 Liters frost Double Door Silver",
    category: "Refrigerators",
    price: 19500,
    qty: 90,
    supplier: "Hisense Electronics",
    reoderLevel: 10,
    activeStatus: true,
  },
  {
    id: 6,
    model: "REF094DR",
    name: "Hisense Frideg 94 Liters frost Silver Single door",
    category: "Refrigerators",
    price: 17000,
    qty: 80,
    supplier: "Hisense Electronics",
    reoderLevel: 10,
    activeStatus: true,
  },
  {
    id: 7,
    model: "FC142SH",
    name: "Hisense Chest Freezer 144 Litters, Grey door",
    category: "Freezers",
    price: 24500,
    qty: 100,
    supplier: "Hisense Electronics",
    reoderLevel: 30,
    activeStatus: false,
  },
  {
    id: 8,
    model: "FC198SH",
    name: "Hisense Chest Freezer 199 Litters,Grey color",
    category: "Freezers",
    price: 28000,
    qty: 100,
    supplier: "Hisense Electronics",
    reoderLevel: 10,
    activeStatus: true,
  },
  {
    id: 9,
    model: "HS622E90G",
    name: "Hisense Dish Washer 13 Plates GREY",
    category: "Dishwashers",
    price: 55000,
    qty: 100,
    supplier: "Hisense Electronics",
    reoderLevel: 10,
    activeStatus: true,
  },
  {
    id: 10,
    model: "FC198SH",
    name: "Hisense Dish Washer 15 Plate Stailness steel",
    category: "Dishwashers",
    price: 58000,
    qty: 100,
    supplier: "Hisense Electronics",
    reoderLevel: 10,
    activeStatus: false,
  },
];

//function adds products and validates
function addNewProducts(product) {
  if(!product.id || !product.name || !product.price || !product.qty) {
    console.log("Required products information missing");
    return;
  };
  
  for (let i = 0; i < productsCatalog.length; i++) {
    if (productsCatalog[i].id === product.id) {
      console.log("id already exist");
      return;
  }
    if(productsCatalog[i].name === product.name) {
      console.log("name already exists")
      return;
    }
} 
  productsCatalog.push(product);
  console.log("Product added successfully");

  return;
}

function deleteProducts(productArray, targetName) {
  for(let i = 0; i < productArray.length; i++) {
    if(productArray[i].name.toLowerCase() === targetName.toLowerCase()) {
      const [removedProduct] = productArray.splice(i, 1);
      console.log("product deleted successfully");
      return removedProduct;
    }
  }
  console.log("product does not exist");
  return false;
}

function updateProducts(productsArray, productId, updates) {
  for(let product of productsArray) {
    if (product.id === productId) {
      console.log("id found");
      
      if(updates.name !== undefined) {
        product.name = updates.name
      }

      if(updates.price !== undefined) {
        product.price = updates.price
      }

      if(updates.qty !== undefined) {
        product.qty = updates.qty
      }

      if(updates.supplier !== undefined) {
        product.supplier = updates.supplier
      }

      if(updates.reoderLevel !== undefined) {
        product.reoderLevel = updates.reoderLevel
      }

      if(updates.activeStatus !== undefined) {
        product.activeStatus = updates.activeStatus
      }

      console.log("product updated successfully")
      return product;
    }
  }

  console.log("product does not exist");
  return false;
}

function receiveNewStock(currentProducts, receivedStock) {
  for(let receivedProducts of receivedStock) {
    if (receivedProducts.qty <= 0) {
      console.log("Invalid product quantity");
      continue;
    }

    let found = false;
    
    for (let products of currentProducts) {
      if (products.name === receivedProducts.name) {
        products.qty += receivedProducts.qty;
        found = true;
        break;
      }
    }

    if (!found) {
console.log(`${receivedProducts.name} does not exist`);
    }
  }
  return currentProducts;
}
