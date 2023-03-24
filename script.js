//Wrap what interacts with the DOM
$(document).ready(function () {
 //Add code to display the current date in the header of the page.
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

// Add code to apply the past, present, or future class to each time-
// block by comparing the id to the current hour.
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
    // Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements.
    $("#" + hour + " textarea").val(localStorage.getItem(hour));
  });
}
timeBlockColor();
