const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=e86d86cf37441967a37a71327bda0d4a`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}