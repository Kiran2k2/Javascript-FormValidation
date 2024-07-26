let returnValue = JSON.parse(localStorage.getItem("users"));
console.log(returnValue);
let productslist = document.getElementById("products-list");
returnValue.map((item, index, users) => {
  productslist.innerHTML += `
  <tr>
  <td>${item.firstName}</td>
  <td>${item.lastName}</td>
  <td>${item.number}</td>
  <td>${item.password}</td>
  <td>${item.dob}</td>
  <td>${item.email}</td>
  <td>${item.gender}</td>
  
  </tr>`;  
});

let button = document.getElementById("button");

button.addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let name = document.getElementById("name").value;
  // console.log(email, number, name);

  // let filterUser = returnValue.filter((val) => {
  //   return val.name.includes(name)
  
  //   })

  let filterUser = returnValue.filter((val)=>{
    return val.firstName.trim().includes(name) && val.email.includes(email) && val.number.includes(number)
  })
    console.log(filterUser.length);

    
     if(filterUser.length===0){
      productslist.innerHTML="User not found"
     }
     if(name==="" &&  number==="" && email===""){
      productslist.innerHTML="User not find"
     }else{
      filterUser.map((item) => {
        console.log(item);
        productslist.innerHTML = `
         
         <tr>
      <td>${item.firstName}</td>
      <td>${item.lastName}</td>
      <td>${item.number}</td>
      <td>${item.password}</td>
      <td>${item.dob}</td>
      <td>${item.email}</td>
      <td>${item.gender}</td>
         
        </tr> 
         
         
         `;
      });
     }

  
});
