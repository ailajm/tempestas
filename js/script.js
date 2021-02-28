//FILE LINK TESTS
    // alert('Reportin for duty!');

let weatherData, userInput;
let $input = $('input[type="text"]');
const $location = $('#returnLocale');
const $temperature = $('#temperature');
const $feelsLike = $('#feelsLike');
const $weather = $('#weather');
const appID = 'db8cd329e3c02194b1ef2f746711a5cd';

$('form').on('submit', handleGetData);

function handleGetData(e) {
    e.preventDefault();
    userInput = $input.val();
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=${appID}`
    })
    .then(
        (data) => {
        $location.text(data.name);
        $temperature.text(data.main.temp);
        $feelsLike.text(data.main.feels_like);
        $weather.text(data.weather.main);
        },
        (error) => {
        console.log('bad request: ', error);
        alert('No such city.  Try again please.')
        });
};

function render() {
        $location.text(weatherData.name);
        $temperature.text(weatherData.main.temp);
        $feelsLike.text(weatherData.main.feels_like);   
        $weather.text(weatherData.weather.main);   
    };  