$(".number").click(function(){ btnVal(this.value); });
$("#btnequals").click(function(){ equals(); });
$("#btnclear").click(function(){ clear(); });
$("#decimal").click(function(){ decimal(); });
$("#btnneg").click(function(){ plusMinus(); });
$(".operator").click(function(){ operator(this.value); });




var calc = $('#disp');
var oper = "";
var num = "";

function btnVal(z){
  calc.val(calc.val() + z) ;
}

function operator(op){
	oper = op;
	num = calc.val();
	calc.val("") ;
}

 
function equals(){
	rez(eval(num), eval(calc.val()), oper);
}
 
 
function rez(n1, n2, op){
	if(op == "+"){
		calc.val(n1 + n2);
	}
	else if(op == "-"){
		calc.val(n1 - n2);
	}
	else if(op == "*"){
		calc.val(n1 * n2);
	}
	else if(op == "/"){
		if(calc.val() == 0){
            calc.val("На 0 делить нельзя") ;
             return;
        }
		calc.val(n1 / n2) ;
	}
}
 
function plusMinus(){
	calc.val(calc.val() * -1) ;
}

function clear(){
	calc.val("") ;
	num = "";
}
	 
function decimal() {
		calc.val(calc.val() + "."); 
}	
	
 