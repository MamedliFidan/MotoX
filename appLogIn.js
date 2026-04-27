
let button=document.querySelector(".button");
button.addEventListener("click",(e) =>{
    e.preventDefault();

    
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".pass").value;
    if(email.trim() === "" || password.trim() === "" ){
        alert("Don't leave any inputs empty");
        return;
    }
    if(password.length == 8 || password.length > 8 ){
        let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");
        if(email === savedEmail && password === savedPassword){
        alert("Welcome!");
        window.location.href = "main.html";
        } else {
        alert("Incorrect email or password");
        }
    
    }else{
        alert("The password must at least 8  characters long.");
        return;
    }
    

    // 🔍 проверка
    
}
    
    )

let button2=document.querySelector(".a");
button2.addEventListener("click" , ()=>{
    window.location.href = "signIn.html";
})
    