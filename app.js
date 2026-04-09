let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('.categ');

window.addEventListener("scroll", () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.scrollHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        current = "contact";
    }

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
let buttons=document.querySelectorAll('.bikemenu div');
let cards = document.querySelectorAll(".bikescateg .bike");

let all=document.querySelector('.all');
all.style.color='red';
buttons.forEach(button => {
    button.addEventListener('click',()=>{
        buttons.forEach(btn => btn.style.color='white');
        button.style.color='red';
        let category = button.textContent.toUpperCase();
        cards.forEach(card => {
            if(category === 'ALL' || card.classList.contains(category.toLowerCase())){
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
    });
    });
});

let detail = document.querySelectorAll('.btn');
let overlay = document.querySelector('.overlay');
let windowBox = document.querySelector('.detailswindow');
let okno = document.querySelectorAll('.detailX');

detail.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.style.display = "block";
        windowBox.style.display = "block";

        let type = btn.classList[1];
        okno.forEach(open => {
            open.style.display = 'none';
            if (open.classList.contains(type)) {
                open.style.display = "block";
            }});
    });
});
overlay.addEventListener('click', () => {
    overlay.style.display = "none";
    windowBox.style.display = "none";
});




const btn = document.querySelector(".place-order");
const nameInput = document.querySelector('input[placeholder="Full name..."]');
const emailInput = document.querySelector('input[placeholder="Email..."]');
const select = document.querySelector("select");
const container = document.querySelector(".orders_section");

btn.addEventListener("click", () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const bike = select.value;
    if (!name || !email || bike === "--Select a Bike--") {
        alert("Write all the fields..");
        return;
    }else{
        if (!email.includes(".com") && !email.includes(".ru")) {
            alert("Mail needs to include .com or .ru");
    }else{
        const newOrder = document.createElement("div");
    newOrder.classList.add("order");

    newOrder.innerHTML = `
        <h2>
            ${name}
            <div class="fotka">
                <img class="fotkaimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoUtVJmsyvY9RYFg53qQnttry62VtwtbaKA&s" alt="">
            </div>
        </h2>
        <p>Email: ${email}</p>
        <p>Ordered Bike: <span> ${bike}</span></p>
    `;

    container.prepend(newOrder);


    nameInput.disabled = true;
    emailInput.disabled = true;
    select.disabled = true;
    btn.disabled = true;
    }
    
    }
    

    
});


let getinfo = document.querySelector('.sendinfo');
let mailinfo = document.querySelector('.mailinfo');
getinfo.addEventListener('click', () => {
    let email = mailinfo.value; 
    if (!email) {
        alert("Please enter your email.");
        return;
    }else{
        if (!email.includes("@") || (!email.includes(".com") && !email.includes(".ru"))) {
            alert("Mail needs to include @ and .com or .ru");
}
    else{ alert("Thank you for subscribing! We will send updates to " + email);
        mailinfo.value = '';
    }
}});
