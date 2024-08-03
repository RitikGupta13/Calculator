let expression=" ";

function getOperation(button){
	const op=button.getAttribute("data-op");
	expression +=`${op}`;
	document.getElementsByClassName("display").value=expression;
}
function getNumber(button){
	const number=button.innerText;
	expression +=number;
	document.getElementsByClassName("display").value=expression;
}
function clearDisplay(){
	expression="";
	document.getElementById("input1").value="";
}
function runCalculator(){
	const result=eval(expression);
	document.getElementsByClassName("display").value=result;
	expression=result.toString();
}