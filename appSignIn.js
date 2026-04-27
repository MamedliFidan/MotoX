let button = document.querySelector(".signup");

button.addEventListener("click", (e) => {
    e.preventDefault();

    let email = document.querySelector(".email").value;
    let pass1 = document.querySelector(".pas1").value;
    let pass2 = document.querySelector(".pas2").value;

    // проверка на пустоту
    if(email.trim() === "" || pass1.trim() === "" || pass2.trim() === ""){
        alert("Don't leave any inputs empty");
        return;
    }

    // проверка паролей
    if(pass1 !== pass2){
        alert("Write the same password");
        return;
    }
    if (pass1.length<8){
        alert("The password must not be 8 characters long.");
        return;
    }
    
    // сохраняем
    localStorage.setItem("email", email);
    localStorage.setItem("password", pass1);

    alert("Account created!");

    // переход на логин
    window.location.href = "login.html";
});