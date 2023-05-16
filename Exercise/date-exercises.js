// nhập năm sinh và in ra số tuổi
// function getAge(year = 2000) {
//     if (typeof year !== "number") return 0;
//     // current year - year
//     const now = new Date();
//     const currentYear = now.getFullYear();
//     return currentYear - year;
// }
// console.log(getAge(1998))

// countdown
// function countdown(minute =0.1){
//     let seconds = minute * 60;
//     let counter = 0
//     const timer =setInterval(function(){
//         counter = counter +1;
//         console.log(counter);
//         if (counter === seconds){
//             clearInterval(timer);
//             console.log("This time is ending")
//         }
//     },1000)
// }
// countdown()

// timesince
function timesince(date){
    // current Time - time
    const now = new Date();
    const yourDate = new Date(date)
    const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
    if (seconds < 0){
        alert("Your time is invalid")
    }
    //  1 year = 31536000s
    let timer = seconds / 31536000
    if (timer > 1){
        console.log(`${Math.floor(timer)} year ago`);
        return;
    }
    // 1 month = 2678400s
    timer = seconds / 2678400
    if (timer > 1){
        console.log(`${Math.floor(timer)} month ago`);
        return;
    }
    // 1 week = 604800s
    timer = seconds / 604800
    if (timer > 1){
        console.log(`${Math.floor(timer)} week ago`);
        return;
    }
    // 1 day = 86400s
    timer = seconds / 86400
    if (timer > 1){
        console.log(`${Math.floor(timer)} day ago`);
        return;
    }
    // 1 hour =3600s
    timer = seconds / 3600
    if (timer > 1){
        console.log(`${Math.floor(timer)} hours ago`);
        return;
    } 
    // 1 minute =60s
    timer = seconds / 60
    if (timer > 1){
        console.log(`${Math.floor(timer)} minute ago`);
        return;
    }
    // seconds 
    if (timer > 1){
        console.log(`${Math.floor(timer)} second ago`);
    }
    return;

}

timesince("Tue May 16 2023 10:46:00 GMT+0700 (Giờ Đông Dương)")