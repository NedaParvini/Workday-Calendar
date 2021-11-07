
 var saveBtn = $(".saveBtn");
 
 // current day is displayed at the top of the calendar
 $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
 
 // each time block shows if we are in the past, present, or future
 function TBcolor() {
     var hour = moment().hours();
 
     $(".time-block").each(function() {
         var currHour = parseInt($(this).attr("id"));
  
         if (currHour > hour) {
             $(this).addClass("future");
         } else if (currHour === hour) {
             $(this).addClass("present");
         } else {
             $(this).addClass("past");
         }
     })
 };
 
 // I click the save button for that time block
 saveBtn.on("click", function() {
 
     var time = $(this).siblings(".hour").text();
     var plan = $(this).siblings(".plan").val();
 
     // Saved in local storage
     localStorage.setItem(time, plan);
 });
 
 function usesched() {
 
     $(".hour").each(function() {
         var currHour = $(this).text();
         var currPlan = localStorage.getItem(currHour);
          if(currPlan !== null) {
             $(this).siblings(".plan").val(currPlan);
         }
     });
 }
 
 TBcolor();
 usesched();
 