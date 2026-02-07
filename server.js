// default admin
if(!localStorage.getItem("users")){
localStorage.setItem("users",JSON.stringify([{email:"admin@aazan.com",password:"1234",role:"admin"}]));
}


function login(){
let email=document.getElementById("email").value;
let pass=document.getElementById("password").value;
let users=JSON.parse(localStorage.getItem("users"));


let user=users.find(u=>u.email===email && u.password===pass);


if(user){
localStorage.setItem("currentUser",JSON.stringify(user));
if(user.role==="admin") location.href="admin.html";
else location.href="dashboard.html";
}else document.getElementById("msg").innerText="Wrong Login";
}


function addProduct(){
let name=document.getElementById("pname").value;
let price=document.getElementById("pprice").value;
let desc=document.getElementById("pdesc").value;


let products=JSON.parse(localStorage.getItem("products")||"[]");
products.push({name,price,desc});
localStorage.setItem("products",JSON.stringify(products));
alert("Product Added");
}


function loadProducts(){
let products=JSON.parse(localStorage.getItem("products")||"[]");
let box=document.getElementById("products");
box.innerHTML=products.map(p=>`<div class='card'><h3>${p.name}</h3><p>${p.desc}</p><b>Rs ${p.price}</b></div>`).join("");
}