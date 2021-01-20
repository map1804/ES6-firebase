const database = firebase.database();

var userId = document.getElementById('userId');
var name1 = document.getElementById('name');
var age = document.getElementById('age');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');
var removeBtn = document.getElementById('removeBtn');

// cách 1: add 1 element 
// addBtn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     database.ref('/users/'+userId.value).set({ 
//         name : name1.value,
//         age : age.value,
//     })
// })
// viết cách 2 add 1 element 
const rootRef = database.ref('users')
addBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const autoId = rootRef.push().key;
    rootRef.child(autoId).set({
        name : name1.value,
        age : age.value,
    });
});

// delete 1 element
updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const
})



// var database = firebase.database();

// // Workspace
// const addBtn = document.getElementById("addBtn");
// const selectBtn = document.getElementById("selectBtn");
// const updateBtn = document.getElementById("updateBtn");
// const removeBtn = document.getElementById("removeBtn");

// var idProduct, productName, productPrice, productDescription;

// function ready() {
//   idProduct = document.getElementById("idProduct").value;
//   productName = document.getElementById("productName").value;
//   productPrice = document.getElementById("productPrice").value;
//   productDescription = document.getElementById("productDescription").value;
// }

// addBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   ready();
//   database.ref("/products/" + idProduct).set({
//     id: idProduct,
//     productName: productName,
//     price: productPrice,
//     description: productDescription,
//   });
// });