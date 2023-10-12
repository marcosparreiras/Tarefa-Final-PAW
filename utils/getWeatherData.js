function getWeatherData(latitude, longitude) {
    const API_KEY = 'afc6d96a';
    const URL = `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&lat=${latitude}&lon=${longitude}`;
    const httpRequest = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        httpRequest.open('GET', URL, true);
        httpRequest.onload = () => onRequestLoad(httpRequest, resolve, reject);
        httpRequest.onerror = (error) => reject(error);
        httpRequest.send();
    });
}

function onRequestLoad(httpRequest, resolve, reject) {
    if (httpRequest.status >= 200 && httpRequest.status < 300) {
        const data = JSON.parse(httpRequest.responseText);
        const results = data.results;
        resolve(results);
    } else {
        reject(httpRequest.status);
    }
}

export default getWeatherData;
