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

// update 1 element
updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newData = {
        name : name1.value,
        age : age.value,
    }

    const updates = {};

    updates['/users/' + userId.value] = newData;
    updates['/super-users/' + userId.value] = newData;

    database.ref().update(updates);
})


// delete 1 element
removeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    rootRef.child(userId.value).remove()
    .then(() => {
        window.alert('Xóa rồi');
    })
    .catch(err => {
        console.error(err);
    })
})



