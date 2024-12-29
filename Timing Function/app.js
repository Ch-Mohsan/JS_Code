// Clock
let chBox = document.getElementById("ch");
let cmBox = document.getElementById("cm");
let csBox = document.getElementById("cs");
let dayBox = document.getElementById("day");
let monthBox = document.getElementById("month");
let yearBox = document.getElementById("year");
let ampm = document.getElementById("ampm");

// Timer
let thBox = document.getElementById("th");
let tmBox = document.getElementById("tm");
let tsBox = document.getElementById("ts");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let ss = 0;
let mm = 0;
let hh = 0;
let clear;

// Alarm
let userTime = document.getElementById("userTime");
let setTime = document.getElementById("setTime");
let setbtn = document.getElementById("setbtn");
let audio = document.getElementById("sound");

function TimeClock() {
    let getter = new Date();
    let ss = getter.getSeconds();
    let mm = getter.getMinutes();
    let hh = getter.getHours() % 12 || 12; 
    let fullhour = getter.getHours();

    csBox.innerHTML = ss + "s:";
    cmBox.innerHTML = mm + "m:";
    chBox.innerHTML = hh + "h:";

    let day = getter.getDate();
    let month = getter.getMonth() + 1;
    let year = getter.getFullYear();
    dayBox.innerHTML = day;
    monthBox.innerHTML = month;
    yearBox.innerHTML = year;

    if (fullhour < 12) {
        ampm.innerHTML = "AM";
    } else {
        ampm.innerHTML = "PM";
    }


    checkTime();
}

startBtn.addEventListener("click", () => {
    clear = setInterval(Timer, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
    stopTimer();
});

function Timer() {
    ss++;
    if (ss == 60) {
        ss = 0;
        mm++;
    }
    if (mm == 60) {
        mm = 0;
        hh++;
    }
    tsBox.innerHTML = ss + "s:";
    tmBox.innerHTML = mm + "m:";
    thBox.innerHTML = hh + "h:";
}

function stopTimer() {
    clearInterval(clear);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

setbtn.addEventListener("click", () => {
    setTime.value = userTime.value; 
    console.log(setTime.value);

});

function checkTime() {
    let alarmTime = setTime.value;
    if (alarmTime) {
        let [userHours, userMinutes] = alarmTime.split(":").map(Number)

        let now = new Date();
        let systemHour = now.getHours();
        let systemMinute = now.getMinutes();

        
        if (systemHour === userHours && systemMinute === userMinutes) {
            console.log("Time matches. Playing alarm.");
            if (audio.paused) {
                audio.play().catch(error => {
                    console.log("User interaction needed for audio playback:", error);
                });
            }
        }
    }
}


TimeClock();
setInterval(TimeClock, 1000); 