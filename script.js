//Wrap what interacts with the DOM
$(document).ready(function () {
  // sets the current date and time at the top of the page.
  var saveBtn = $(".saveBtn");
  var todayDate = dayjs().format("dddd, MMM DD YYYY");
  $("#currentDay").html(todayDate);
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".plan").val();
    var time = $(this).parent().attr("id");
    // Save text in local storage
    localStorage.setItem(time, text);
  });
});


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?




// Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. 
//Add code to display the current date in the header of the page.
function timeBlockColor() {
  var currentHour = dayjs().hour();
  console.log(currentHour);
  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id"));
    console.log(hour);
    if (currentHour > hour) {
      $(this).addClass("past");
    } else if (currentHour == hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    $("#"+hour +" textarea").val(localStorage.getItem(hour));

  });
}
timeBlockColor();

