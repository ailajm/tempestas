//FILE LINK TESTS
    // alert('Reportin for duty!');

// State Variables
let weatherData, userInput;

// Cached element references - selected DOM elements
const $location = $('#returnLocale');
const $temperature = $('#temperature');
const $windChill = $('#windChill');
const $weather = $('#weather');
const appID = 'db8cd329e3c02194b1ef2f746711a5cd';
const $input = $('input[type="text"]');

// Event Listeners
$('form').on('submit', handleGetData);

    // Sets DOM elements with data fetched by AJAX request
$.ajax({
    url:'https://api.openweathermap.org/data/2.5/weather?q=louisville&appid=' + appID
  })
  .then(
    (data) => {
      $location.text(data.name);
      $temperature.text(data.main.temp);
      $windChill.text(data.main.feels_like);
      $weather.text(data.weather.id);
    },
    (error) => {
      console.log('bad request: ', error);
    });

// Functions
    // Assigns data from AJAX request to 
function render() {
        $location.text(weatherData.name);
        $temperature.text(weatherData.main.temp);
        $windChill.text(weatherData.main.feels_like);   
        $weather.text(weatherData.weather.description);   
    };  

 function handleGetData(event) {
    event.preventDefault();
        // calling preventDefault() on a 'submit' event will prevent a page refresh  
    userInput = $input.val();
        // getting the user input
    $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather?q=louisville&appid=' + appID
        }).then(
        (data) => {
            weatherData = data;
            render();
        },
        (error) => {
            console.log('bad request', error);
        }
    )   
}


    