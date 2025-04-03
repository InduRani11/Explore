let loc = "London,UK";
const api_key = "KFBHWNPE6VGG4PAT9SZY6CZC6"


const input = document.getElementById('search');
const btn = document.getElementById('search-btn');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('wind-speed');
const loctn = document.getElementById('location');


btn.addEventListener("click", updateInfo);
function updateInfo() {
    loc = input.value;
    const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?key=${api_key}`;
    fetch(api).then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data);
        // localStorage.setItem('location',data?.address);
        loctn.innerText=loc;
        humidity.innerText = data.currentConditions.humidity;
        temperature.innerText = data.currentConditions.temp;
        speed.innerText = data.currentConditions.windspeed;
    }).catch((err)=>{
        console.log(err)

    });

}
