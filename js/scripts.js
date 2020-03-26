$(document).ready(function() {
	console.log('JavaScipt is working');

	//on click function
	$('form#age-check').submit(function(event) {
    event.preventDefault();
    // $("#age-form-div").hide()
    let age = $("#age").val();
    checkAge(age);	
	});

	$('form#location)
});
let checkAge = function(ageInput){
  console.log("I ran");
  
  if(ageInput >= 18){
		$("#Over-18").show()
		$("#age-form").hide()
  } else {
		$("#Under-18").show()
		$("#age-form").hide()
	}
	
	//$().click(function())
		//var location = $("#location").val();
}

