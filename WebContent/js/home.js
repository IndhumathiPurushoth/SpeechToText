 var recognition = new webkitSpeechRecognition();
 var final = '';
 var elementId = '';
 var startid = '';
 var stopid = '';
 
$(document).ready(function(){

	if (!('webkitSpeechRecognition' in window)) {
		alert('Speech api not supported');
	} else { 
		// alert('speech api supportedddddddd');
	    recognition.continuous = true;   
	    recognition.interimResults = true; 
	    recognition.lang = "en-IN"; 
	    recognition.maxAlternatives = 1; 
	}
	
	$(".form-group").hover(
		    function() {
		    	var getId = "#"+this.id+"Idstart";
		    	$(getId).show();
		    	
		    }, function() {
		    	
		    	var getId = "#"+this.id+"Idstart";
		    	$(getId).hide();
		    	
		    	
		    }
		);
	
});

function start(){
	
}

function stop(){
	
	 recognition.stop();
	$(startid).show();
	$(stopid).hide();
	startid = '';
	stopid = '';
	
}

function startButton(event,id) {
	final = '';
	elementId = '';
	startid = "#"+id+"start";
	stopid = "#"+id+"stop";
	$(startid).hide();
	$(stopid).show();
	elementId = id;
    recognition.start();
}

recognition.onstart = function() {
    // Listening
    };

recognition.onend = function() {
 };

recognition.onresult = function(event) { // the event holds the results
    if (typeof(event.results) === 'undefined') { // Something is wrong…
        stop();
        return;
    }

    for (var i = event.resultIndex; i < event.results.length; ++i) {      
        if (event.results[i].isFinal) { // Final results
        	// final = final +
			// $("#txtComments").text(event.results[i][0].transcript);
        	final = final + event.results[i][0].transcript;
        	console.log('elementid:'+elementId);
        	$("#"+elementId).val(event.results[i][0].transcript);
            console.log("final results: " + event.results[i][0].transcript);   // Of
																				// course
																				// –
																				// here
																				// is
																				// the
																				// place
																				// to
																				// do
																				// useful
																				// things
																				// with
																				// the
																				// results.
        } else {   // i.e. interim...
            console.log("interim results: " + event.results[i][0].transcript);  // You
																				// can
																				// use
																				// these
																				// results
																				// to
																				// give
																				// the
																				// user
																				// near
																				// real
																				// time
																				// experience.
        } 
    } // end for loop
}; 
