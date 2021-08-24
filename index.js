const time = document.getElementById('time');
const sec = document.getElementById('sec');
const med = document.getElementById('med');
const days = document.querySelectorAll('.day');


const months = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
const netdate = document.getElementById('date');

setInterval(()=>{
const now = new Date();
const day = now.getDay();
const date = now.getDate();
const second = now.getSeconds();
const month = now.getMonth();
const year = now.getFullYear();
const minute = now.getMinutes();
const hour = now.getHours();

let nettime = hour+":"+minute;
if(hour<10 && minute<10){
    nettime = "0"+hour+":0"+minute;
}
else if(hour<10 && minute>=10){
    nettime = "0"+hour+":"+minute;
}
else if(hour>=10 && minute<10){
    nettime = hour+":0"+minute;
}
time.innerHTML = nettime;

if(second<10){
    sec.innerHTML = "0"+second;
}
else{
    sec.innerHTML = second;
}
if(hour>=0 && hour<=12){
    med.innerHTML = "AM";
}
else{
    med.innerHTML = "PM";
}

if(day == 0){
    days[day+6].classList.remove('light');
}
else{
    days[day-1].classList.remove('light');
}


let compdate = `${date} ${months[month-1]} ${year}`;
netdate.innerHTML = compdate;

},1000);




