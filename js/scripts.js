$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let countTo = parseInt($("input#countTo").val());
    let countBy = parseInt($("input#countBy").val());
    let sum = 0;
    let limit = (countTo/countBy - 1)
    $("#maths").html("");

    if (countBy > countTo) {
      alert("Your count by value is larger than your count to value.");
    } else if (countTo < 0 || countBy < 0) {
      alert("We can't calculate with negatives :(");
    } else {
      for (let index = 0; index <= limit; index ++) {
        sum = sum + countBy
        $("#maths").append(sum + ", ")
      }
  
      $("#results").show();
    }
 


    
  });
});

/*console.log("This is the index:" + index);
      console.log("This is the number we're counting to:" + countTo);
      console.log("This is the number we're counting by:" + countBy);*/