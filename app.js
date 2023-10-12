import getUserPosition from './utils/getUserPosition.js';
import getWeatherData from './utils/getWeatherData.js';
import Table from './components/table.js';
import WeatherCard from './components/weatherCard.js';
import ErrorCard from './components/errorCard.js';

async function app() {
    try {
        const [latitude, longitude] = await getUserPosition();
        const weatherData = await getWeatherData(latitude, longitude);

        const tableData = weatherData.forecast.map((dataObj) => {
            return {
                data: dataObj.date,
                dia_da_semana: dataObj.weekday,
                max: dataObj.max,
                min: dataObj.min,
                probablilidade_chuva: dataObj.rain_probability,
                vento: dataObj.wind_speedy,
                condição: dataObj.description,
            };
        });

        const cardData = {
            title: weatherData.city_name,
            date: weatherData.date,
            description: weatherData.description,
            temperature: weatherData.temp,
        };

        const card = new WeatherCard(cardData);
        const table = new Table(tableData);

        card.insertOnDocument('card-section');
        table.inserOnDocument('table-section');
    } catch (error) {
        const errorCard = new ErrorCard();
        errorCard.insertOnDocument();
        console.log(error);
    }
}

app();
