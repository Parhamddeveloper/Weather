// const Container = document.querySelector('.Container');
// const Search = document.querySelector('.SearchBox button');
// const WeatherBox = document.querySelector('.WeatherBox');
// const WeartherDetails = document.querySelector('.WeartherDetails');
// const Error404 = document.querySelector('.NotFound');

// Search.addEventListener('click',Search)

// function Search(){
//     const APIKey = '3ea3bd5a695f5ac3ea1d679b218e5112';
//     const City = document.querySelector('.SearchBox input').value;
//     if(City === '')
//         return;



//    fetch('https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid={API key}') .then(Response => Response.json()).then
//    (json =>{
//         if(json.cod === '404'){
//             Container.style.height = '400px';
//             WeatherBox.style.display = 'none';
//             WeartherDetails.style.display = 'none';
//             Error404.style.display = 'block';
//             Error404.classList.add('FadeIn');
//             return;
//         }
//         Error404.style.display = 'block';
//         Error404.classList.remove('FadeIn');

//         const Image = document.querySelector('.WeatherBox img');
//         const Temperature = document.querySelector('.WeatherBox .Temperature');
//         const Description = document.querySelector('.WeatherBox .Description');
//         const Humidity = document.querySelector('.WeatherDetails .Humidity span');
//         const Wind = document.querySelector('.WeatherDetails .Wind span');

//         switch(json.weather[0].main){
//             case 'Clear':
//                 Image.src = 'IMG/ClearWeather.png';
//                 break;
//             case 'Rain':
//                 Image.src = 'IMG/'
//                 break;
//             case 'Snow':
//                 Image.src = 'IMG/'
//                 break;   
//             case 'Clouds':
//                 Image.src = 'IMG/'
//                 break;
//             case 'Haze':
//                 Image.src = 'IMG/' 
//                 break;
//             default:
//                 Image.src = '';     
//         }
//         Temperature.innerHTML = `${parseInt(json.main.temp)}<span>C</span>`;
//         Description.innerHTML = `${json.weather[0].description}`;
//         Humidity.innerHTML = `${json.main.humidity}%`
//         Wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

//         WeatherBox.style.display = '';
//         WeartherDetails.style.display = '';
//         WeatherBox.classList.add('FadeIn');
//         WeartherDetails.classList.add('FadeIn');
//         Container.style.height = '590px';
//    })    
// }
const apiKey = '3ea3bd5a695f5ac3ea1d679b218e5112';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const WeatherBox = document.querySelector('.WeatherBox');
const WeartherDetails = document.querySelector('.WeartherDetails');
const Container = document.querySelector('.Container');
const locationInput = document.querySelector('.Input');
const searchButton = document.querySelector('.SearchBox button');
const locationElement = document.querySelector('.WeatherBox p');
const temperatureElement = document.querySelector('.Temperature');
const descriptionElement = document.querySelector('.Description');
const Humidity = document.querySelector('.WeatherDetails .Humidity span');
const Wind = document.querySelector('.WeatherDetails .Wind span');
const Error404 = document.querySelector('.NotFound');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let Image = document.querySelector('.WeatherBox img')
            if(data.weather[0].main === 'Clear'){
                Image.src = "../IMG/ClearWeather.png"
            }
            else if(data.weather[0].main === 'Clouds'){
                Image.src = "../IMG/404.png"
 
            }
            Container.style.height = '590px';
            WeatherBox.classList.add('FadeIn');
            document.querySelector('.WeatherDetails').classList.add('FadeIn');

            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
            Humidity.innerHTML = `${data.main.humidity}%`
            Wind.innerHTML = `${data.wind.speed}KM/H`
            Error404.style.opacity = 0;
            Error404.style.scale = 0;
            Error404.style.display = 'none';
            document.querySelector('.Wind').style.display = '';
            document.querySelector('.Humidity').style.display = '';
        })
        .catch(error => {
            Error404.style.opacity = 1;
            Error404.style.scale = 1;
            Error404.style.display = 'block';
            document.querySelector('.Wind').style.display = 'none';
            document.querySelector('.Humidity').style.display = 'none';

        });
}
