//Time analog clock
let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

//Time digital clock
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let ampm = document.querySelector('#ampm');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
    
    //Digital clock
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();

    let times = h <= 12 ? "AM" : "PM";

    //convert 24hr clock to 12hr clock
    if (h > 12) {
        h-= 12;
    }
    
    //Add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = times;
},);