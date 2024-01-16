// var productNameInput=document.getElementById("productNameInput");
// var productPriceInput=document.getElementById("productPriceInput");
// var productCategoryInput=document.getElementById("productCategoryInput");
// var productDescInput=document.getElementById("productDescInput");
// var products=[]
// if(localStorage.getItem("products")){

// }

// function addProduct(){
//     var product={
//         name:productNameInput.value,
//         price:productPriceInput.value,
//         category:productCategoryInput.value,
//         decription:productDescInput.value,
//     }
//     localStorage.setItem("products",JSON.stringify(products))
//     products.push(product)
//     displayProducts()
// }
// function displayProducts(){
//     var trs=" ";
//     for(var i=0 ;i < products.length ;i++){
//         trs+=`<tr>
//         <td>${i}</td>
//         <td>${products[i].name}</td>
//         <td>${products[i].price}</td>
//         <td>${products[i].category}</td>
//         <td>${products[i].decription}</td>
//         <td>
//           <button class="btn btn-outline-warning">Update</button>
//         </td>
//         <td>
//           <button class="btn btn-outline-danger">Delete</button>
//         </td>
//       </tr>
//  `
//     }
//     document.getElementById("tBody").innerHTML=trs
// }
// var productNameInput=document.getElementById("productNameInput");
// var productPriceInput=document.getElementById("productPriceInput");
// var productCategoryInput=document.getElementById("productCategoryInput");
// var productDescInput=document.getElementById("productDescInput");
// var listProducts=[]
// function addProduct(){
//   product={
//     name:productNameInput.value,
//     price:productPriceInput.value,
//     category:productCategoryInput.value,
//     description:productDescInput.value
//   }
//   listProducts.push(product); // end add product
//   clear()
//   console.log(listProducts)
//   displayData()
// }
// // clear products
// function clear(){
//   productNameInput.value="";
//   productPriceInput.value="";
//   productCategoryInput.value="";
//   productDescInput.value="";
// }
// function displayData(){
//   var data="";
//   for(var i=0; i<listProducts.length;i++){
//     data += `
//      <tr>
//                 <td >
//                     ${listProducts[i]}
//                 </td>
//                 <td >
//                     ${listProducts[i].name}
//                 </td>
//                 <td>
//                     ${listProducts[i].price}
//                 </td>
//                 <td>
//                     ${listProducts[i].category}
//                 </td>
//                 <td>
//                     ${listProducts[i].description}
//                 </td>
//                 <td >
//                     <button class="btn bg-warning " >update</button>
//                    </td>
//                    <td>
//                    <button class="btn bg-danger" >delete</button>
//                    </td>
//                 </tr> 
//     `
//   }
//   document.getElementById("tBody").innerHTML=data
// }
let productNameInput=document.getElementById("productNameInput");
let productPriceInput=document.getElementById("productPriceInput");
let productCategoryInput=document.getElementById("productCategoryInput");
let productDescInput=document.getElementById("productDescInput");
myProductes=[];
if(localStorage.getItem("product")!=null){
  myProductes=JSON.parse(localStorage.getItem("product"));
  display()
}
function addProduct(){
  product={
    name:productNameInput.value,
    price:productPriceInput.value,
    catigory:productCategoryInput.value,
    description:productDescInput.value
  }
  myProductes.push(product);
  localStorage.setItem("product",JSON.stringify(myProductes));
  display()
  clear()
}
function clear(){
  productNameInput.value="";
  productPriceInput.value="";
  productCategoryInput.value="";
  productDescInput.value="";
}

function display(){
  var cartona="";
  for(var i=0;i<myProductes.length;i++){
    cartona+=`
    <tr>
                     <td >
                         ${[i]}
                     </td>
                     <td >
                         ${myProductes[i].name}
                     </td>
                     <td>
                         ${myProductes[i].price}
                     </td>
                     <td>
                         ${myProductes[i].catigory}
                     </td>
                     <td>
                         ${myProductes[i].description}
                     </td>
                     <td >
                         <button class="btn bg-warning " >update</button>
                        </td>
                        <td>
                        <button class="btn bg-danger" onclick="sayDelete(${i})">delete</button>
                        </td>
                     </tr> 
    
    `
  }
  document.getElementById("tBody").innerHTML=cartona;
}
function sayDelete(index){
myProductes.splice(index,1);
display();
localStorage.setItem("product",JSON.stringify(myProductes));
}
var term=document.getElementById("term");
function saySearch(){
var cartona="";
for(var i=0;i<myProductes.length;i++){
  if(myProductes[i].name.includes(term.value)){
    cartona+=`
    <tr>
                     <td >
                         ${[i]}
                     </td>
                     <td >
                         ${myProductes[i].name}
                     </td>
                     <td>
                         ${myProductes[i].price}
                     </td>
                     <td>
                         ${myProductes[i].catigory}
                     </td>
                     <td>
                         ${myProductes[i].description}
                     </td>
                     <td >
                         <button class="btn bg-warning " >update</button>
                        </td>
                        <td>
                        <button class="btn bg-danger" onclick="sayDelete(${i})">delete</button>
                        </td>
                     </tr> 
    
    `
  }

}
document.getElementById("tBody").innerHTML=cartona;
}