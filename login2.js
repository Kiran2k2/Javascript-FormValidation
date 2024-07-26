

let form=document.getElementById("form")
console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault()
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;

//   let number= document.getElementById("number").value;
  

   localStorage.getItem("email",email)
   localStorage.getItem("password",password)
//    localStorage.getItem("number",number)

   let returnValue = JSON.parse(localStorage.getItem("users"));
console.log(returnValue);
returnValue.map((item,index,users)=>{
    if(item.email!==email && item.number!==email){
        alert("email is not matching")
    }
    if(item.password!==password){
        alert("password is not mataching")
    }

    
    else if ((item.email===email ||item.number===email) && item.password===password){
        alert("login successful")
      window.open("./user.html");
     
    }
}) 


})























