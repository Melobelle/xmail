var URL = "http://www.sxbox.cc/xmail/index.php/Home/"

var session = window.sessionStorage;

$(document).ready(function() {
	changePassword();
});

function changePassword(){
	$("#submit").click(function(){
		var info = {
			'username':session.username,
			'password':$("#password").val(),
			'newpassword':$('#newpassword').val()
		}
		$.ajax({
			url: URL+'User/changeProfile',
			type: 'POST',
			dataType: 'json',
			data: info
		})
		.done(function(data) {
			console.log(data.status);
			if (data.status) {
				$("#tip").fadeIn(500);
				setTimeout(function(){$("#tip").fadeOut(500);}, 2000);
			}
			else{
				$("#tip2").fadeIn(500);
				setTimeout(function(){$("#tip2").fadeOut(500);}, 2000);
			}
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	})
}