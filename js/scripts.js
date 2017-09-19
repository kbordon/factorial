$(document).ready(function() {
  $("#factorialForm").submit(function(event){
    var factorialInput = parseInt($("input#factorial").val());
    var total = 1;

    for ( index = factorialInput; index > 0 && index <= factorialInput; index--) {
      //var finalTotal = total + (index-1)*index;
      total = total * index;
      //var finalTotal = total * index;
      // alert(total);
    }

    // $("#output").show();
    $("#output").text(total);

    event.preventDefault();
  });

  $("#palForm").submit(function(event) {
    var palInput = $("input#pal").val();
    var palArray = palInput.split("");

    var reversePalArray = palArray.map(function(letter){
      return letter
    });

    reversePalArray.reverse();

    // var reversePalArray = palArray.reverse();

    for ( index = 0; index < palArray.length; index++) {
      if (reversePalArray[index] != palArray[index]) {
        $("#notPalOutput").show();
      } else {
        $("#palOutput").show();
        // alert(reversePalArray[index]);
        // alert(palArray[index]);
      }
    }
    event.preventDefault();


  });
});
