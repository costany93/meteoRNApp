const API_KEY = '457c1d40852b629cbd288a9c89e14145'

export default function getWeather(text, donnee) {
  return fetch('http://api.weatherstack.com/current?access_key='+API_KEY+'&query='+text+'Dakar')
    .then((response) => response.json())
    .then((json) => {
      return json
    })
    .catch((error) => {
      console.error(error);
    });
};