const { miYargs } = require('./config/yargs');
const land = require('./land/land');
const weather = require('./land/weather');


// Make a request for a user with a given ID

const onGetClima = async(ciudad) => {


    const respLand = await land.getWeather(ciudad);
    const respWeather = await weather.getWeatherMap(respLand.latitud, respLand.longitud, ciudad);


    let html = `\n\n Clima para ${respWeather.name} |${respWeather.sys.country}| \n-----------------------------------\n`;
    html += `Temperatura: ${respWeather.main.temp} °C\n`;
    html += `Temp. Min: ${respWeather.main.temp_min} °C\n`;
    html += `Temp. Max: ${respWeather.main.temp_max} °C\n`;
    html += `Humedad: ${respWeather.main.humidity} %\n`;

    return html;

};

onGetClima(miYargs.direccion).then(response => console.log(response)).catch(err => console.log(err));