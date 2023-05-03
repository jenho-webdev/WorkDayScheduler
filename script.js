var currentDay = $('#currentDay');
var blocksContainer = $('.time-block');
var saveBtn = $('.saveBtn');
var data = [];

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  displayTime();
  setInterval(displayTime, 1000);
  readFromStorage();
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  //event listener for the save button in view page
 saveBtn.on('click', function () {
    
    //get the parent element of the clicked element
    var saveBtnHour = $(this).parent().attr("id").split("-")[1];
    var userInput = $(this).siblings("textarea").val();
    // Check if an object with the same hour already exists in the data array
    var existingObj = data.find(obj => obj.hour === saveBtnHour);

    if (existingObj) {
      // If an object with the same hour exists, update its input value
      existingObj.input = userInput;
    } else {
      // If not, create a new object and add it to the data array
      var newObj = { hour: saveBtnHour, input: userInput };
      data.push(newObj);
    }
    // wirte to the local storage and overwrite the same data array that contain saved hourly time block object.
      localStorage.setItem('data',JSON.stringify(data));
  });


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // 

  blocksContainer.each(function () {
    var hour = $(this).attr("id").split('-')[1];
    var currentHour = dayjs().format("HH");

    if (hour < currentHour) 
    {
      $(this).addClass("past");
    }
    else if (hour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding userInputarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  function readFromStorage() {
    var readData =  localStorage.getItem('data');
    //check if what storaged locally is empty or not 
    //if null, declear it as an array
    if (readData) {
      data = JSON.parse(readData);
    }
    else{
      data = [];
    }
    
    data.forEach(element => {
      var dataHour = element.hour;
      var dataUserInput = element.input;
      
      blocksContainer.each(function () {
        var blkHour = $(this).attr("id").split('-')[1];
        var blkUserInputEl = $(this).find("textarea");
        if (dataHour == blkHour) {
           blkUserInputEl.val(dataUserInput);
        }
      })
      // var timeBlockEl = document.getElementById(hour);
      // var userInputEl = GetTimeBlock.querySelector("textarea");
      // userInputEl.innerText = userInput.value;
    });
  }


  // TODO: Add code to display the current date in the header of the page.

  function displayTime(){
    var today = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
   currentDay.text(today);
  }
  
});
