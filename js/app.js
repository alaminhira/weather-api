const API_KEY = '40a87b3648b084bd19ce61c578fc44f0';
const select = id => document.getElementById(id);

const getData = async city => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return await res.json();
}

const displayWeatherData = async () => {
    const searchField = select('search-field');
    const searchValue = searchField.value;
    searchField.value = '';

    let data;
    try {
        data = await getData(searchValue);
        console.log(data)
        if (data.cod === 200) {
            select('city').innerText = data.name;
            select('temp').innerText = data.main.temp;
            select('condition').innerText = data.weather[0].description;
        }
    } catch(err) {
        alert(data.message);
    }
    

}

select('search-btn').addEventListener('click', displayWeatherData);
