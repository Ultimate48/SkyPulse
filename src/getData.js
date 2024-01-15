//Use the .env file to get the API key
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.X_Api_Key;

const getData = async (city) => {
    fetch('https://api.api-ninjas.com/v1/weather?city=' + city, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

export default getData;
