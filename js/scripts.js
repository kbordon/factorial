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
});
