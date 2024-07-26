let form = document.querySelector('form');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm()) {
          saveDataToLocalStorage();
          // alert('Registration successful!');
          
          form.reset();
        }
      });

      function validateForm() {
        let isValid = true;

        let firstName = document.getElementById('firstName').value.trim();
        let lastName = document.getElementById('lastName').value.trim();
        let password = document.getElementById('password').value;
        let confirmPassword =document.getElementById('confirmPassword').value;
        let dob = document.getElementById('dob').value;
        let email = document.getElementById('email').value;
        let number=document.getElementById('number');
        let gender = document.getElementById('male');
        let gender2= document.getElementById('female');

        console.log(firstName,lastName,password,confirmPassword,dob,email,gender,gender2);

        if(firstName==""|| number ==""|| email==""|| dob==""||gender==""||password=="")  {
          alert("Please fill the form completely") 
          
      } 

        let firstNameError = document.getElementById('firstNameError');
        let lastNameError = document.getElementById('lastNameError');
        let passwordError = document.getElementById('passwordError');
        let confirmPasswordError = document.getElementById(
          'confirmPasswordError'
        );
        let dobError = document.getElementById('dobError');
        let emailError = document.getElementById('emailError');
        let genderError = document.getElementById('genderError');

        firstNameError.innerText = '';
        lastNameError.innerText = '';
        passwordError.innerText = '';
        confirmPasswordError.innerText = '';
        dobError.innerText = '';
        emailError.innerText = '';
        genderError.innerText = '';
        numberError.innerText='';

        // First Name validation
        // if (firstName === '') {
        //   firstNameError.innerText = 'First Name is required';
        //   isValid = false;
        // }



        if (form['firstName'].value.match(/[0-9]/)) { 
          
          firstNameError.innerText = 'pLease put only alphabates';
          isValid=false
        }


        // Password validation
        if (password.length < 8) {
          passwordError.innerText = 'Password must be at least 8 characters';
          isValid = false;
        }

        // Confirm Password validation
        if (confirmPassword === '') {
          confirmPasswordError.textContent = 'Please confirm password';
          isValid = false;
        } else if (confirmPassword !== password) {
          confirmPasswordError.textContent = 'Passwords do not match';
          isValid = false;
        }

        // Date of Birth validation
        if (dob === '') {
          dobError.textContent = 'Date of Birth is required';
          isValid = false;
        }

        // Email validation
      
        if(email===''){
          emailError.innerText='email is required'
          isValid=false;
        }

        if (number == "") {
          numberError.textContent = "number is required";
          isValid = false;
        } else if (number.length > 10 || number.length < 10  ) {
          // number.style.backgroundColor = "red"
          numberError.textContent = "number should be equal to 10 ";
          isValid = false;
        }
      

        // Gender validation
        if (!gender) {
          genderError.innerText = 'Please select your gender';
          isValid = false;
        }

        return isValid;
      }

      function saveDataToLocalStorage() {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let firstName = document.getElementById('firstName').value.trim();
        let lastName = document.getElementById('lastName').value.trim();
        let password = document.getElementById('password').value;
        let dob = document.getElementById('dob').value;
        let email = document.getElementById('email').value.trim();
        let number=document.getElementById("number").value
        let gender = document.querySelector('input[name="gender"]:checked');
    
        let userData = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            dob: dob,
            email: email,
            number:number,
            gender: gender ? gender.value : ''
        };
    
        let isDuplicate = users.some((user) => user.email === userData.email);
        if (!isDuplicate) {
            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));
            alert("form submitted sucessfully");
            window.open("./login2.html");
        } else {
            alert('User already exists!');
            form.reset();
        }
    }
      