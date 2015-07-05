var URL = "http://www.sxbox.cc/xmail/index.php/Home/";
var session = window.sessionStorage;

var email_id = session.chooseid;
var deal_id = [];
var count = 0;
$(document).ready(function (){
	$(".menu li").menu();
	getEmail();
	getUserList();
	
}); 


function getEmail(){
	$.ajax({
		url: URL+'Email/getAEmail',
		type: 'POST',
		dataType: 'json',
		data: {'email_id':email_id}
	})
	.done(function(data) {
		if (data.status) {
			var obj = data.data;
			setContent(obj);
		}
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
	});
	
}


function setContent(obj){
	$("#title").text(obj.title);
	$("#from").text(obj.from);
	$("#content").text(obj.content);
}


function getUserList(){
	$.ajax({
		url: URL+'Email/getUserList',
		type: 'POST',
		dataType: 'json',
		data: ""
	})
	.done(function(data) {
		// $.each(data.data, function(index, obj) {
		// 	 setContact(obj);
		// });
		console.log(data.data);
		setContact(data.data);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
	});
	
}

function setContact(obj){
	$("#render").empty().html($("#temple").render(obj));
	chooseContact();
}

function chooseContact(){
	$("#render").on('click', 'input', function(event) {
		count = 0;
		deal_id = [];
		$("#render >li").each(function(){
			
			// console.log($(this).children('input').is(':checked'));
			var target = $(this).children('input');
			var ischecked = target.is(':checked');
			if (ischecked) {
				deal_id[count] = $(target).data('id');
				count++;
			}
		})
		console.log(deal_id);
		sendEmail();
	});
	
}

function sendEmail(){

	$("#send-email").click(function(){
		var info = {
			'email_id':email_id,
			'user_id':session.user_id,
			'deal_id':deal_id,
			'deadline': 2
		}
		$.ajax({
			url: URL+'Distribute/distribute',
			type: 'post',
			dataType: 'json',
			data: info
		})
		.done(function(data) {
			console.log(data);
			if (data.status) {
				console.log(data.message);
				$("#tip").fadeIn(500);
				setTimeout(function(){$("#tip").fadeOut(500);}, 2000);
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