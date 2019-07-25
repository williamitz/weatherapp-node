const axios = require('axios');

const getWeather = async(argument) => {
    const ecodedUrl = encodeURI(argument);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/find?q=${ ecodedUrl }`,
        headers: {
            "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
            "X-RapidAPI-Key": "22c6476498msh51b2ebbe047890bp14e43cjsn4c41f855f2a8"
        }
    });

    const response = await instance.get();
    const data = response.data.list;

    if (data.length === 0) {
        throw new Error(`No se encontró la ciudad ${argument}`);
    }

    return {
        'address': data[0].name,
        'latitud': data[0].coord.lat,
        'longitud': data[0].coord.lon
    };
}

module.exports = {
    getWeather
}