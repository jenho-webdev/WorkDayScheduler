var currentDay = $('#currentDay');
var blocksContainer = $('blocksContainer');
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
  
  //event listener for the start button in view page
  function saveBtnlistener(){
  window.addEventListener("click", e => 
  {
    //get the parent element of the clicked element
    var element = e.target;
    
    //get the parent element of the parent element
  
    //confirm that the clicked object was a save button
    if (element.classList.contains("saveBtn")) 
    {
      //get the id of the parent element
      var timeBlcokId = element.parentElement.id;
      var newUserInput = element.parentElement.querySelector("textarea").value;
      
      
      data.array.forEach(element => {
        if(element.hour === timeBlcokId)
        {
          element.userInput = newUserInput;
        }
        localStorage.setItem("data", JSON.stringify(data));
      });
    }

  });
};



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // 
  // function checkTime()
  //   {
  //     for(var i=0; i<8;i++)
  //     {
  //        if(dayjs().format(hh) === 
  //     }
  //   };

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding userInputarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  function readFromStorage() {
    var data =  localStorage.getItem("data");
    if (data) {
      data = JSON.parse(data);
    }
    else{
      data = [];
    }
    data.forEach(element => {
      var hour = element.hour;
      var userInput = element.userInput;
      var timeBlockEl = document.getElementById(hour);
      var userInputEl = GetTimeBlock.querySelector("textarea");
      userInputEl.innerText = userInput.value;
    });
  }


  // TODO: Add code to display the current date in the header of the page.

  function displayTime(){
    var today = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
   currentDay.text(today);
  }
  
});
