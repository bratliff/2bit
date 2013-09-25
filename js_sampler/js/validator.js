// JavaScript Document

SubmittingForm=function() {
		
			
			var fields = $(":input").serializeArray();
				
			   $("#yourName").html(fields[1].value);
			   $("#emailField").html(fields[2].value);
			   $("#urlField").html(fields[3].value);
			   $("#commentField").html(fields[4].value);
			   $("#responder").slideDown(500);
		}

		$(document).ready(function() {
			$("#responder").hide();
			
			$("#form1").validate({

				submitHandler:function(form) {
					SubmittingForm();
				},
				rules: {
					name: "required",		// simple rule, converted to {required:true}
					email: {				// compound rule
						required: true,
						email: true
					},
					url: {
						url: true
					},
					comment: {
						required: true
					}
				},
				messages: {
					comment: "Please enter a comment."
				}
			});
			
			
		});
		

		jQuery.validator.addMethod(
			"selectNone",
			function(value, element) {
				if (element.value == "none")
				{
					return false;
				}
				else return true;
			},
			"Please select an option."
		);

		$(document).ready(function() {
			$("#fvujq-form2").validate({
				submitHandler:function(form) {
					SubmittingForm();
				},
				rules: {
					sport: {
						selectNone: true
					}
				}
			});
		});
		
	$(document).ready(function() {
    function showValues() {
      var fields = $(":input").serializeArray();
	  
	  $("#results").empty();
	  
      jQuery.each(fields, function(i, field){
        $("#results").append(field.value + " ");
      });
	  
    }

    //$(":text").click(showValues);
	//$(":text").blur(showValues);
	});