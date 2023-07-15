// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 
var currentDay = dayjs()
var currentHour = currentDay.hour();

dayjs().format()

var finalCount = 8 
var nine =  $('#hour-9')
var ten = $('#hour-10')
var eleven =$("#hour-11")
var twelve =$("#hour-12")
var one =$("#hour-1")
var two =$("#hour-2")
var three =$("#hour-3")
var four =$("#hour-4")
var five =$("#hour-5")


$('#currentDay').text(dayjs().format("MMMM D, dddd, h:m:s A"))

$(document).ready(function () {
  $("#saveBtn9").click (function() {
   var userInput = $('#description9').val()
   localStorage.setItem('9AM-Save', JSON.stringify(userInput))
  })
  var obj = localStorage.getItem("9AM-Save")
  console.log(obj)
  });

  $(document).ready(function () {
    $("#saveBtn10").click (function() {
     var userInput = $('#description10').val()
     localStorage.setItem('10AM-Save', JSON.stringify(userInput))
    })
    var obj = localStorage.getItem("10AM-Save")
    console.log(obj)
    });

    $(document).ready(function () {
      $("#saveBtn11").click (function() {
       var userInput = $('#description11').val()
       localStorage.setItem('11AM-Save', JSON.stringify(userInput))
      })
      var obj = localStorage.getItem("11AM-Save")
      console.log(obj)
      });

      $(document).ready(function () {
        $("#saveBtn12").click (function() {
         var userInput = $('#description12').val()
         localStorage.setItem('12AM-Save', JSON.stringify(userInput))
        })
        var obj = localStorage.getItem("12AM-Save")
        console.log(obj)
        });

        $(document).ready(function () {
          $("#saveBtn1").click (function() {
           var userInput = $('#description1').val()
           localStorage.setItem('1PM-Save', JSON.stringify(userInput))
          })
          var obj = localStorage.getItem("1PM-Save")
          console.log(obj)
          });

          $(document).ready(function () {
            $("#saveBtn2").click (function() {
             var userInput = $('#description2').val()
             localStorage.setItem('2PM-Save', JSON.stringify(userInput))
            })
            var obj = localStorage.getItem("2PM-Save")
            console.log(obj)
            });

            $(document).ready(function () {
              $("#saveBtn3").click (function() {
               var userInput = $('#description3').val()
               localStorage.setItem('3PM-Save', JSON.stringify(userInput))
              })
              var obj = localStorage.getItem("3PM-Save")
              console.log(obj)
              });

              $(document).ready(function () {
                $("#saveBtn4").click (function() {
                 var userInput = $('#description4').val()
                 localStorage.setItem('4PM-Save', JSON.stringify(userInput))
                })
                var obj = localStorage.getItem("4PM-Save")
                console.log(obj)
                });
                $(document).ready(function () {
                  $("#saveBtn5").click (function() {
                   var userInput = $('#description5').val()
                   localStorage.setItem('5PM-Save', JSON.stringify(userInput))
                  })
                  var obj = localStorage.getItem("5PM-Save")
                  console.log(obj)
                  });

    if (currentHour === 9) {
      nine.addClass("present")
      ten.addClass("future")
      eleven.addClass("future")
      twelve.addClass("future")
      one.addClass("future")
      two.addClass("future")
      three.addClass("future")
      four.addClass("future")
      five.addClass("future")
    } else if(currentHour === 10) {
      nine.addClass("past")
      ten.addClass("present")
      eleven.addClass("future")
      twelve.addClass("future")
      one.addClass("future")
      two.addClass("future")
      three.addClass("future")
      four.addClass("future")
      five.addClass("future")

    }else if(currentHour === 11) {
      nine.addClass("past")
      ten.addClass("past")
      eleven.addClass("present")
      twelve.addClass("future")
      one.addClass("future")
      two.addClass("future")
      three.addClass("future")
      four.addClass("future")
      five.addClass("future")
    }else if(currentHour === 12) {
      nine.addClass("past")
      ten.addClass("past")
      eleven.addClass("past")
      twelve.addClass("present")
      one.addClass("future")
      two.addClass("future")
      three.addClass("future")
      four.addClass("future")
      five.addClass("future")
    }else if(currentHour === 13) {
      nine.addClass("past")
      ten.addClass("past")
      eleven.addClass("past")
      twelve.addClass("past")
      one.addClass("present")
      two.addClass("future")
      three.addClass("future")
      four.addClass("future")
      five.addClass("future")
    }else if(currentHour === 14) {
      nine.addClass("past")
      ten.addClass("past")
      eleven.addClass("past")
      twelve.addClass("past")
      one.addClass("past")
      two.addClass("present")
      three.addClass("future")
      four.addClass("future")
      five.addClass("future")
    }else if(currentHour === 15) {
      nine.addClass("past")
      ten.addClass("past")
      eleven.addClass("past")
      twelve.addClass("past")
      one.addClass("past")
      two.addClass("past")
      three.addClass("present")
      four.addClass("future")
      five.addClass("future")
    }
    else if(currentHour === 16) {
      nine.addClass("past")
      ten.addClass("past")
      eleven.addClass("past")
      twelve.addClass("past")
      one.addClass("past")
      two.addClass("past")
      three.addClass("past")
      four.addClass("present")
      five.addClass("future")
    }else if(currentHour === 17) {
      nine.addClass("past")
      ten.addClass("past")
      eleven.addClass("past")
      twelve.addClass("past")
      one.addClass("past")
      two.addClass("past")
      three.addClass("past")
      four.addClass("past")
      five.addClass("present")
    } else {}


  

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

