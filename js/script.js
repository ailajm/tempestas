//FILE LINK TESTS
    // alert('Reportin for duty!');

// State Variables
let weatherData, userInput;

// Cached element references - selected DOM elements
const $location = $('#returnLocale');
const $temperature = $('#temperature');
const $feelsLike = $('#feelsLike');
const $weather = $('#weather');
const appID = 'db8cd329e3c02194b1ef2f746711a5cd';
let $input = $('input[type="text"]');

// Event Listeners
$('form').on('submit', handleGetData);

$.ajax({
    url:`https://api.openweathermap.org/data/2.5/weather?q=louisville&units=imperial&appid=${appID}`
  })
  .then(
    (data) => {
      $location.text(data.name);
      $temperature.text(data.main.temp);
      $feelsLike.text(data.main.feels_like);
      $weather.text(data.weather.description);
    },
    (error) => {
      console.log('bad request: ', error);
    });

function render() {
        $location.text(weatherData.name);
        $temperature.text(weatherData.main.temp);
        $feelsLike.text(weatherData.main.feels_like);   
        $weather.text(weatherData.weather.description);   
    };  

 function handleGetData(e) {
    e.preventDefault();
    userInput = $input.val();
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?q=${$input}&units=imperial&appid=${appID}`
    }).then(
        (data) => {
            weatherData = data;
            render();
        },
        (error) => {
            console.log('bad request', error);
        }
    )   
};


    