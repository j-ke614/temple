$.getJSON("https://api.openweathermap.org/data/2.5/forecast?lat=42.8713&lon=-112.4455&appid={1fc4486682b178960a91c0c0d6b95b25}"), 

function(data){

console.log(data);

var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp = Math.floor(data.main.temp);

var weather = data.weather[0].main;


$('.icon').attr('src', icon);
$(".temp").append(temp  + ' &#8457;');

$(".weather").append(weather );
};

function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');   
    document.getElementById('hamburgerBtn').classList.toggle('open');   
}

const openNav = document.getElementById('hamburgerBtn')
openNav.onclick = toggleMenu;

const latestUp = document.querySelector('#latestUp');

const update = document.lastModified

latestUp.innerHTML = update
