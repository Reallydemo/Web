// JavaScript Document

window.onload=initAll;
function initAll(){
	'use strict';
	 document.getElementById("Lincoln").onclick = saySomething;
	document.getElementById("Kemmedy").onclick = saySomething;
	document.getElementById("Nixon").onclick = saySomething;
}
function saySomething(){
	'use strict';
	switch(this.id){			
		case "Lincoln":
			alert("你是哪位？");
			break;
		case "Kennedy":
			alert("我是佩奇！");
			break;
		case "Nixon":
			alert("我是乔治！");
			break;
		default:
	}
}