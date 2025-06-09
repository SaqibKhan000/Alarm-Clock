let h4 = document.querySelector("h4");
let allSelectTags = document.querySelectorAll("select");
let button = document.querySelector("button");
let alarmTime;
let isAlarmSet = false;
let audio = new Audio("./Image&Audio/ringtone.mp3");
for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let optionTag = `<option value="${i}">${i}</option>`;
    allSelectTags[0].firstElementChild.insertAdjacentHTML("beforebegin", optionTag);
}


for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let optionTag = `<option value="${i}">${i}</option>`;
    allSelectTags[1].firstElementChild.insertAdjacentHTML("beforebegin", optionTag);
}

for (let i = 0; i < 2; i++) {
    ampm = i == 0 ? "AM" : "PM";
    let optionTag = `<option value="${ampm}">${ampm}</option>`;
    allSelectTags[2].firstElementChild.insertAdjacentHTML("beforebegin", optionTag);
}



setInterval(() => {
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();
    let ampm;
    h = hour < 10 ? "0" + hour : hour;
    m = minute < 10 ? "0" + minute : minute;
    s = second < 10 ? "0" + second : second;

    if (h >= 12) {
        h -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
        h4.textContent = `${h}:${m}:${s} ${ampm}`;
        let currentTime = `${h}:${m} ${ampm}`;
        if (alarmTime === currentTime) {
            isAlarmSet = true;
            audio.play();
            audio.loop = true;
        }
    }
}, 1000);




let setAlarm = () => {
    if (isAlarmSet) {
        alarmTime = "";
        audio.pause();
        button.innerText = "Set Alarm";
        allSelectTags[0].style.opacity = "1";
        allSelectTags[1].style.opacity = "1";
        allSelectTags[2].style.opacity = "1";
        allSelectTags[0].style.pointerEvents = "fill";
        allSelectTags[1].style.pointerEvents = "fill";
        allSelectTags[2].style.pointerEvents = "fill";
        return isAlarmSet = false;
    }
    let selectVal1 = allSelectTags[0].value;
    let selectVal2 = allSelectTags[1].value;
    let selectVal3 = allSelectTags[2].value;
    if (
        selectVal1.includes("HOUR") ||
        selectVal2.includes("MINUTE") ||
        selectVal3.includes("AM/PM")) {
        alert("Please! set a valid time");
    } else {
        isAlarmSet = true;
        button.innerText = "Clear Alarm";
        allSelectTags[0].style.opacity = "0.5";
        allSelectTags[1].style.opacity = "0.5";
        allSelectTags[2].style.opacity = "0.5";
        allSelectTags[0].style.pointerEvents = "none";
        allSelectTags[1].style.pointerEvents = "none";
        allSelectTags[2].style.pointerEvents = "none";
        alarmTime = `${selectVal1}:${selectVal2} ${selectVal3}`;
    }
}