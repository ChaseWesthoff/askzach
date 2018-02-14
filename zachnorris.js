$(document).ready(function() {

  $("#chuckSubmit").click(function(e) {
	e.preventDefault();

        var myurl = "http://api.icndb.com/jokes/random?firstName=Zach&amp;lastName=Doe%20The%20result%20will%20be%20similar%20to%20before,%20for%20example:"
        $.ajax({
	    	url : myurl,
	    	dataType : "json",
	    	success : function(json) {
	    		if (json.type == "success") {
	    			console.log(json);

	    			var results = "<p>" + json.value.joke + "</p>"
				}

$("#chuckResults").html(results);
	    	}
	});
	});
    });

