// Clock
var tickingClock = setInterval(clock, 0);
function clock () {
  var myDate = new Date ();
  var clock = myDate.toLocaleTimeString();
  document.getElementById("clock").innerHTML = clock;
};

//Clock Styles
var clockColor = document.getElementsById("clock");
document.setAttribute("style","color: yellow;");

//Pacific Time Styles
var redType = document.getElementById("red-type");
redType.style.color= "red";

/*
Code Broken Down

var tickingClock = setInterval(clock, 0);
// We are setting a variable that makes the clock tick using setInterval. The delay is set to zero so the clock will load with the page and continually display the time.

setInterval Syntax
var intervalId = scope.setInterval(func, [delay, arg1, arg2, ...]);


function clock () {
// creating a funtion of the clock.

  var myDate = new Date ();
  //new Date is used to work with dates and in this clock will be referenced by .toLocaleTimeString().
  new Date carries the year, month, day, hours, minuttes, seconds, milliseconds information at the time it is called. (setInterval is calling new Date every second to get a ticking clock)


    var clock = myDate.toLocaleTimeString();
    //.toLocaleTimeString method returns ONLY the time section of  new Date()
    -->ONLY the time section of new Date()
        const event = new Date(`December 9,2020 11:21:00 GMT+00:00);
          console.log(event.toLocaleTimeString('en-US));
          11:21:00 = ONLY the time section of new Date()


    document.getElementById("clock").innerHTML = clock;
};.
//document --> Traversing the DOM
document is the highest OBJECT in the document tree. It is the root object.

.getElementById() is connecting the id instife the () to the html document

.innerHTML returns, sets, or changes the HTML content of an element. Here it's returning the content in the variable "clock" to the html document.

*/