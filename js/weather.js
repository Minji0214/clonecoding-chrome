const API_KEY = "284a0d0bdb7c4230736e803dfb140293"
const weather = document.querySelector("#weather span:first-child")
 const city = document.querySelector("#weather span:last-child")

function  onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in",lat,lng);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) =>response.json())
        .then((data) => {
            city.innerText =data.name
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`

    })
}
function  onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
