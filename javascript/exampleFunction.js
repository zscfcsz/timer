function runMethod(){
	alert("Time is over.");
}

function oneTimeRun(year, month, day, hour, minute, second, millisecond){
	setTimeout("runMethod()",new Date(year, month-1, day, hour, minute, second, millisecond) - new Date().getTime());
}