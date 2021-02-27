//FILE LINK TESTS
    alert('Reportin for duty!');

// State Variables
let movieData, userInput;

// Cached element references - selected DOM elements
const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $input = $('input[type="text"]');

// Event Listeners
$('form').on('submit', handleGetData);

    // Sets DOM elements with data fetched by AJAX request
$.ajax({
    url:'https://www.omdbapi.com/?apikey=53aa2cd6&t='
  })
  .then(
    (data) => {
      $title.text(data.Title);
      $year.text(data.Year);
      $rated.text(data.Rated);
    },
    (error) => {
      console.log('bad request: ', error);
    });

// Functions
    // Assigns data from AJAX request to 
function render() {
        $title.text(movieData.Title);
        $year.text(movieData.Year);
        $rated.text(movieData.Rated);   
};  

 function handleGetData(event) {
    event.preventDefault();
        // calling preventDefault() on a 'submit' event will prevent a page refresh  
    userInput = $input.val();
        // getting the user input
    $.ajax({
        url:'https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
        }).then(
        (data) => {
            movieData = data;
            render();
        },
        (error) => {
            console.log('bad request', error);
        }
    )   
}
    