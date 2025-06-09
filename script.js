let h4 = document.querySelector("h4");
let selectTags = document.querySelectorAll("select");
let alarmTime;
let isAlarmTime = false;
for (let i = 12; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let optionTag = `<option value="${i}">${i}</option>`;
    selectTags[0].insertAdjacentHTML("afterbegin", optionTag)
}


for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let optionTag = `<option value="${i}">${i}</option>`;
    selectTags[1].insertAdjacentHTML("afterbegin", optionTag)
}



for (let i = 2; i > 0; i--) {
    let ampm = i === 1 ? "AM" : "PM";
    let optionTag = `<option value="${ampm}">${ampm}</option>`;
    selectTags[2].insertAdjacentHTML("afterbegin", optionTag);
}



setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm;
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;

    if (h >= 12) {
        h = h - 12;
        h = h == 0 ? 12 : h;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    let currentTime = `${h}:${m} ${ampm}`;
    h4.textContent = `${h}:${m}:${s} ${ampm}`;
   if(currentTime === alarmTime){
    isAlarmTime = true;
    document.querySelector("h5").innerText = "Ringing..........";
    document.querySelector("button").innerText = "Clear Alarm";
   }
}, 1000);







function setAlarm() {
    let hVal = selectTags[0].value;
    let mVal = selectTags[1].value;
    let sVal = selectTags[2].value;
    if (hVal === "hour" ||
        mVal === "minute" || 
        sVal === "AM/PM") {
        alert("Please! set a valid time");
    } else {

         alarmTime = `${hVal}:${mVal} ${sVal}`;
        alert("Time setting is correct");
    }

    if(isAlarmTime){
        hVal
        document.querySelector("h5").innerText = "";
    document.querySelector("button").innerText = "Set Alarm";
    }
}