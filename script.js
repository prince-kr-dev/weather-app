let url = "http://api.weatherapi.com/v1/current.json?key=83bed694b5bb4a4c8d230932252302 &q=";

async function getTemperature(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.location)
        return response.data.current.temp_c;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getIcon(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.current.condition.icon);
        return response.data.current.condition.icon;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getMessage(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.current.condition.text);
        return response.data.current.condition.text;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getTime(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.location.localtime);
        return response.data.location.localtime;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getLocation(city){
    try{
        let response = await axios.get(url+city);
        return response.data.location.name;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getRegion(city){
    try{
        let response = await axios.get(url+city);
        return response.data.location.region;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getLastUpdated(city){
    try{
        let response = await axios.get(url+city);
        return response.data.current.last_updated;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}

async function getWindSpeed(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.current.wind_kph);
        return response.data.current.wind_kph;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getHumidity(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.current.humidity);
        return response.data.current.humidity;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getPressure(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.current.pressure_mb);
        return response.data.current.pressure_mb;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getFeelsLike(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.current.feelslike_c);
        return response.data.current.feelslike_c;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getUvIdx(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.current.uv);
        return response.data.current.uv;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getLattitude(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.location.lat);
        return response.data.location.lat;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getLongitude(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.location.lon);
        return response.data.location.lon;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getTimezone(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.location.tz_id);
        return response.data.location.tz_id;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}
async function getCountry(city){
    try{
        let response = await axios.get(url+city);
        // console.log(response.data.location.country);
        return response.data.location.country;
    } catch(e){
        console.log("Error : Data Not Found", e);
    }
}

let body = document.querySelector("body");

//elemrnt selection for left Part
let temprature = document.querySelector("#left h1");
let input = document.querySelector("input");
let search = document.querySelector("#inp i");
let img  = document.querySelector("#left img");
let message = document.querySelector("#left h2");
let time = document.querySelector("#left h4");
let currentLocation = document.querySelector("#left h3");
let lastUpdateMessage = document.querySelector("#left h5");
let currentRegion = document.querySelector("#left h6");

//element selection for right part
let wind = document.querySelector(".wind h1");
let currHumidity = document.querySelector(".humidity h1");
let currPressure = document.querySelector(".pressure h1");
let currFeelsTemp = document.querySelector(".feels h1");
let currUv = document.querySelector(".uv h1");
let currLattitude = document.querySelector(".latt h1");
let currLongitude = document.querySelector(".long h1");
let currTimezone = document.querySelector(".tz h1");
let currCountry = document.querySelector(".cntry h1");

if(input.value == ""){
    input.value = "Patna";
    allFunctions();
}

search.addEventListener("click", async ()=>{
    allFunctions();
})

body.addEventListener("keydown", (event)=>{
    if(event.code == "Enter"){
        allFunctions();
    }
});

function allFunctions(){
    showTemperature();
    setIcon();
    showMessage();
    showTime();
    showLocation();
    showRegion();   
    showLastUpdated();
    showWindSpeed();
    showHumidity();
    showPressure();
    showFeelsLike();
    showUvIdx();
    showLattitude();
    showLongitude();
    showTimezone();
    showCountry();
}


async function showTemperature(){
    let city = input.value;
    let tempVal = Math.floor(await getTemperature(city));
    temprature.innerHTML = tempVal;
}

async function setIcon(){
    let city = input.value;
    let iconUrl = await getIcon(city);
    img.setAttribute("src", iconUrl);
}

async function showMessage(){
    let city = input.value;
    let msg = await getMessage(city);
    message.innerHTML = msg;
}

async function showTime(){
    let city = input.value;
    let currTime = await getTime(city);
    time.innerHTML = `Localtime : ${currTime}`;
}

async function showLocation(){
    let city = input.value;
    let currentCity = await getLocation(city);
    currentLocation.innerHTML = currentCity;
}
async function showRegion(){
    let city = input.value;
    let currentRgn = await getRegion(city);
    currentRegion.innerHTML = currentRgn;
}

async function showLastUpdated() {
    let city = input.value;
    let updateMsg = await getLastUpdated(city);
    lastUpdateMessage.innerHTML =  `Last Updated : ${updateMsg}`;
}

async function showWindSpeed() {
    let city = input.value;
    let speed = await getWindSpeed(city);
    wind.innerHTML =  `${speed} km/h`;
}

async function showHumidity() {
    let city = input.value;
    let hmdty = await getHumidity(city);
    currHumidity.innerHTML = `${hmdty}%`
}

async function showPressure() {
    let city = input.value;
    let prsr = await getPressure(city);
    currPressure.innerHTML = `${prsr} mb`;
}

async function showFeelsLike() {
    let city = input.value;
    let fl = await getFeelsLike(city);
    currFeelsTemp.innerHTML = `${fl} °C`;
}

async function showUvIdx() {
    let city = input.value;
    let uvIdx = await getUvIdx(city);
    currUv.innerHTML = `${uvIdx}`;
}

async function showLattitude() {
    let city = input.value;
    let lattitd = await getLattitude(city);
    currLattitude.innerHTML = `${lattitd}`;
}

async function showLongitude() {
    let city = input.value;
    let lngtd = await getLongitude(city);
    currLongitude.innerHTML = `${lngtd}`;
}

async function showTimezone() {
    let city = input.value;
    let timez = await getTimezone(city);
    currTimezone.innerHTML = timez;
}

async function showCountry() {
    let city = input.value;
    let cntry = await getCountry(city);
    currCountry.innerHTML = cntry;
}

let menuUp = document.querySelector("#menuUp");
let menuDown = document.querySelector("#menuDown");
let menu = document.querySelector("#right");

menuUp.addEventListener("click", ()=>{
    menu.style.top = "0%";
})
menuDown.addEventListener("click", ()=>{
    menu.style.top = "100%";
})