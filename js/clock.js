let Name = prompt("Adınız nedir?"); //prompt ile kullanicidan bilgi alindi
let myName = document.querySelector("#myName").textContent = Name; // Kullanicidan alinan ad direkt olarak ekrana yazildi


function showTime() {
    let date = new Date();
    let year = date.getFullYear();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Gün olarak alinan değer string olarak gösterildi 
    switch (day) {
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
            break;
    }

    // saat dakika ya da saniye 10 dan kucukse basina '0' koyuldu
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    let time = hours + ":" + minutes + ":" + seconds + " " + day + " " + year;
    document.querySelector("#myClock").textContent = time;
    myClock.classList.add("timeStyle"); // css class eklendi

    setTimeout(showTime, 1000); // her 1 saniyede bir yenilenmesi saglandi
}
showTime();



