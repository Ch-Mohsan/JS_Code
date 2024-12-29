let save = document.getElementById("save");
let loader = document.getElementById("loader");

let Institute = document.getElementById("Institute");
let Degree = document.getElementById("Degree");
let passYear = document.getElementById("passYear");
let grades = document.getElementById("grades");
let language = document.getElementById("lange");
let skills = document.getElementById("skiles");
let explainSkill = document.getElementById("explainSkil");
let projects = document.getElementById("projects");
let explainProject = document.getElementById("explainProject");

save.addEventListener("click", () => {
    let workingData = {
        institute: Institute.value,
        degree: Degree.value,
        passYear: passYear.value,
        grades: grades.value,
        language: language.value,
        skills: skills.value,
        explainSkill: explainSkill.value,
        projects: projects.value,
        explainProject: explainProject.value
    };

    localStorage.setItem("workingData", JSON.stringify(workingData));
    loader.classList.remove("load");
    setTimeout(() => {
        window.location.href = "viewCv.html";
    }, 2000);
});
