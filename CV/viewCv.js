// Get the elements
let image = document.getElementById("image");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let country = document.getElementById("country");
let address = document.getElementById("address");
let language = document.getElementById("lange");
let skill = document.getElementById("skill");
let hobby = document.getElementById("hoby");
let about = document.getElementById("about");
let education = document.getElementById("education");
let experience = document.getElementById("experince");

// Load user info from localStorage
let existData = localStorage.getItem("userInfo");
if (existData) {
    let userInfo = JSON.parse(existData);
    image.src = userInfo.image;
    fullname.innerHTML = userInfo.fullname;
    email.innerHTML = userInfo.email;
    phone.innerHTML = userInfo.phone;
    country.innerHTML = userInfo.country;
    about.innerHTML = userInfo.about;
    address.innerHTML = userInfo.address;
    hobby.innerHTML = userInfo.hobby;
} else {
    alert("User information not found.");
}

// Load academic and work info
let isWorkingData = localStorage.getItem("workingData");
if (isWorkingData) {
    let workingData = JSON.parse(isWorkingData);
    language.innerHTML = workingData.language;
    skill.innerHTML = workingData.skills;
    experience.innerHTML = `${workingData.projects} - ${workingData.explainProject}`;
    education.innerHTML = `${workingData.institute}, ${workingData.degree} (${workingData.passYear}), Grade: ${workingData.grades}`;
} else {
    alert("Academic and experience data not found.");
}

// Add download functionality
document.getElementById("download").addEventListener("click", function () {
    const cvContent = document.getElementById("cv-content");
    html2pdf().from(cvContent).set({
        margin: 1,
        filename: 'My_CV.pdf',
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).save();
});
