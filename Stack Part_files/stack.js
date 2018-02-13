$(document).ready(function() {

  $("#stackSubmit").click(function(e) {
	e.preventDefault();
	var value = $("#stackInput").val();
        console.log(value);
        var myurl = "http://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle=" + value;
    	$.ajax({
	    	url : myurl,
	    	dataType : "json",
	    	success : function(json) {
	    		
	    		var results = "";
		results += '<h2>Answers to "' + value + '"</h2>';
console.log(json);
						for (i = 0; i < json.items.length; i++){
					if (json.items[i].is_answered) {
					results += '<a href= "' + json.items[i].link + '"> ' +json.items[i].title + '</a>';   
					results += '<br>' + '<br>';
				}
			}
			
				
$("#stackResults").html(results);
	    	}
	});
	});
    });

