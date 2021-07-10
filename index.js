 var weatherKey = "b5dbb39bbccbae43147d103cb6d1dd63"
 var url = "https://api.openweathermap.org/data/2.5/"
 var searchBar = document.querySelector('.searchBar');
 searchBar.addEventListener('keypress', setAsk);
 
 function getResult(cityName) {
   let query = url+'weather?q='+cityName+'&appid='+weatherKey+'&units=metric&lang=en'
   // let background = "https://source.unsplash.com/1600x900/?skyland"+cityName
   let imgg = 'https://api.unsplash.com/search/photos?client_id=YOvUx2bZ5-Y283Yk8J7144mcWZ9sR0og3jSS6iAdQ6Q&query='+cityName
   fetch(query)
   .then(weather => {
    if (!weather.ok) {
      alert("No weather found.");
      throw new Error("No weather found.");
    }
     return weather.json()
   })
   .then(displayResult)
   fetch(imgg)
   .then(image => {
     return image.json()
   })
   .then(displayImg)
 }

 function setAsk(evt) {
  if (evt.keyCode == '13') {
    getResult(searchBar.value);
  }
}

 //const displayBackground = (image) => {
 
 // console.log(image.results[Math.floor(Math.random()*5)])
// `url(${image.results[Math.floor(Math.random()*5)].urls.raw}), url(${image.results[Math.floor(Math.random()*5)].urls.raw}) `
 // }
const displayImg = (image) => {
  // let img =document.querySelector('.img')
  document.body.style.backgroundImage= 'url('+image.results[Math.floor(Math.random()*5)].urls.raw+')'
  console.log(image.results[0].urls)
}
const displayResult = (weather) => {
  let city = document.querySelector('.city')
  city.innerHTML = 'Weather in '+ weather.name
  let temp = document.querySelector('.temp')
  temp.innerHTML = Math.round(weather.main.temp)+'°C'
  let desc = document.querySelector('.desc')
  desc.innerHTML = weather.weather[0].description
  let minmax = document.querySelector('.minmax')
  minmax.innerHTML = "min "+Math.round(weather.main.temp_min)+'°C /'+"max "+Math.round(weather.main.temp_max)+'°C'
  let humidity = document.querySelector('.humidity')
  humidity.innerHTML = 'Humidity %'+weather.main.humidity

  
  //
  

console.log(weather)
}
