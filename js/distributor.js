var URL = "http://www.sxbox.cc/xmail/index.php/Home/"

var session = window.sessionStorage;

$(document).ready(function() {
	$("#not_send a").click(function(event) {
		$(this).css('background','#cdcdcd')
		$("#al_send a").css('background', '#ffffff')
		$("#sendback a").css('background', '#ffffff')
	})
	$("#al_send a").click(function(event) {
		$(this).css('background','#cdcdcd')
		$("#not_send a").css('background', '#ffffff')
		$("#sendback a").css('background', '#ffffff')
	})
	$("#sendback a").click(function(event) {
		$(this).css('background','#cdcdcd')
		$("#al_send a").css('background', '#ffffff')
		$("#not_send a").css('background', '#ffffff')
	})

	//username登陆显示
	setUsername();
	
})
//设置登陆username
function setUsername(){
	console.log(session.username);
	$("#username").text(session.username);
}
