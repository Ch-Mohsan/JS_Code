let save = document.getElementById("save");
let loader = document.getElementById("loader");
let inputFile = document.getElementById("inputImg"); 
let imageBox = document.getElementById("img");

let fullname = document.getElementById("fullName");
let email = document.getElementById("Email");
let phone = document.getElementById("Phone");
let country = document.getElementById("country");
let about = document.getElementById("about");
let address = document.getElementById("address");
let hobby = document.getElementById("hobby");

// Store data on image selection
inputFile.addEventListener("change", (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(event) {
            imageBox.classList.remove("hide");
            imageBox.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Save the personal data
save.addEventListener("click", () => {
    let personalData = {
        image: imageBox.src,
        fullname: fullname.value,
        email: email.value,
        phone: phone.value,
        country: country.value,
        about: about.value,
        address: address.value,
        hobby: hobby.value
    };

    localStorage.setItem("userInfo", JSON.stringify(personalData));
    loader.classList.remove("load");
    setTimeout(() => {
        window.location.href = "Acdemic.html";
    }, 2000);
});
