const axios = require('axios');

const getWeatherMap = async(lat, lon, ciudad) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?appid=76eaf894315775fae543ecfd0be8a320&units=metric';
    const response = await axios.get(`${ url }&lat=${ lat }&lon=${ lon }`);
    const data = response.data;
    if (!data) {
        throw new Error(`Error al determinar el clima para ${ ciudad }`);
    }
    return data;
}

module.exports = {
    getWeatherMap
}