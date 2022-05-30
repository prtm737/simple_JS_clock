function Showtime() { 

    let nowTime = new Date();

    let hour = nowTime.getHours();
    let minute = nowTime.getMinutes();
    let second = nowTime.getSeconds();
    let hr12 = "AM";

    if (hour == 0) {

        hour = 12;

    } if (hour > 12) {

        hour = "0" + (hour - 12);
        hr12 = "PM"

    }

    setTimeout( Showtime, 1000);

    document.getElementById("hrspan").textContent = hour;
    document.getElementById("min").textContent = minute;
    document.getElementById("secspan").textContent = second;
    document.getElementById("sessionEl").textContent = hr12;

        
    
    // setTimeout( Showtime, 1000);
};

Showtime();





