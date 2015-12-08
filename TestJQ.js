 $(function(){

var firstQuestion = $( "input[name='k1']" );
var secondQuestion = $( "input[name='k2']" );
var thirdQuestion = $( "input[name='k3']" );
var fourthQuestion = $( "input[name='k4']" );
var fifthQuestion = $( "input[name='k5']" );

$("#testresult").click(function() { testResult(); });
 
var result = 0;


function testResult() {
	result = 0;
	if (firstQuestion[0].checked) {
		result += 2;
	};
	
	if (secondQuestion[2].checked) {
		result += 2;
	};
	
	if (thirdQuestion[3].checked) {
		result += 2;
	};

	
	if  (fourthQuestion[0].checked) {
	 result -= 1;
	}
	if  (fourthQuestion[1].checked) {
	 result += 1;
	}
	if  (fourthQuestion[2].checked) {
	 result -= 1;
	}
	if  (fourthQuestion[3].checked) {
	 result += 1;
	}
	
	
	
	if  (fifthQuestion[0].checked) {
	 result += 1;
	}
	if  (fifthQuestion[1].checked) {
	 result += 1;
	}
	if  (fifthQuestion[2].checked) {
	 result -= 1;
	}
	if  (fifthQuestion[3].checked) {
	 result -= 1;
	}
	

	
	
alert("Вы набрали " + result + " баллов " + result * 10 + "% правильных ответов!"); 
}

});