let container = document.querySelector(".container");
let start = document.getElementById("start");
let page1 = document.getElementById("page1");
let body = document.querySelector("body");

start.addEventListener("click", async () => {
  musicPlay();
  await createPage1();  
  await createPage2();  
});

function musicPlay() {
  let song = document.querySelector("audio");
  song.play();
  setTimeout(() => {
    song.pause();
  }, 14000);  
}


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function createPage1() {
  page1.classList.add("next");
  container.classList.add("moveInside");

  let newpage = document.createElement("div");
  newpage.classList.add("newpage");
  
  let Phara1 = document.createElement("p");
  Phara1.innerHTML = "Wishing you a birthday as bright and beautiful as the difference you've made in my life. May your dreams and aspirations unfold with ease and grace.";
  Phara1.classList.add("textStyle");
  newpage.appendChild(Phara1);

  pageImg1();
  faly(Phara1);

  body.prepend(newpage);
  
  await delay(5000);  
  
  newpage.classList.add("hide");
}

async function createPage2() {
  let newpage = document.createElement("div");
  newpage.classList.add("newpage");
  body.prepend(newpage);

  let Phara1 = document.createElement("p");
  Phara1.innerHTML = "On your special day, I want to thank fate for bringing us together. You're more than just a friend; you're a blessing in disguise. Happy birthday.";
  Phara1.classList.add("textStyle");
  newpage.appendChild(Phara1);

  page2Img();
  balloons(Phara1, newpage);

  await delay(10000); 
  
  newpage.classList.add("hide");
  page1.classList.remove("next");
}

function pageImg1() {
  let img1 = document.createElement("span");
  img1.classList.add("setImg");
  img1.classList.add("Img1");
  container.appendChild(img1);
  
  delay(5000).then(() => {
    container.removeChild(img1);
  });
}

function page2Img() {
  let img2 = document.createElement("div");
  img2.classList.add("img1");
  container.appendChild(img2);
  
  delay(10000).then(() => {
    container.removeChild(img2);
  });
}

function faly(Phara1) {
  let flower = document.createElement("span");
  flower.classList.add("imgDesign");
  flower.classList.add("flower");
  Phara1.after(flower);
}

function balloons(Phara1, newpage) {
  let balon = document.createElement("span");
  balon.classList.add("imgDesign");
  balon.classList.add("balon");
  Phara1.after(balon);
  
  delay(5000).then(() => {
    newpage.removeChild(balon);
  });
}
