


const apiKey = "aec1b0e4265ca804525c3eb7d52f76ee";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")
const weatherBox = document.querySelector(".weather")


async function checkweather(city){
    let response = await fetch(apiUrl + city+ `&appid=${apiKey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{

        let data = await response.json()
        console.log(data)
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/Hr";

        if(data.weather[0].main == "Clouds"){
            weathericon.src= "./images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weathericon.src= "./images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src= "./images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src= "./images/Drizzle.png"
        }
        else if (data.weather[0].main == "Mist"){
            weathericon.src= "./images/mist.png"
        }
        document.querySelector(".weather").style.display="block"
        document.querySelector(".error").style.display="none"
        }
    
}


// function details(cardsvalues){
//     cardsvalues.forEach((datas)=>{
//     let weathers = ` <img src="./images/rain.png" class="weather-icon" alt="img">
//     <h1 class="temp">${Math.round(datas.main.temp) + "°C"}</h1>
//     <h2 class="city">${datas.name}</h2>
//     <div class="details">
//         <div class="col">
//             <img src="./images/humidity.png" alt="img">
//             <div>
//                 <p class="humidity">${datas.main.humidity + "%"}</p>
//                 <p>humadity</p>
//             </div>
//         </div>
//         <div class="col">
//             <img src="./images/wind.png" alt="img">
//             <div>
//                 <p class="wind">${datas.wind.speed + "Km/Hr"}</p>
//                 <p>Wind Speed</p>
//             </div>
//         </div>
//     </div>`
//     weatherBox.innerHTML += weathers})
// }


searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value)
})


