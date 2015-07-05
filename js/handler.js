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

//获取处理列表中已经处理的邮件
function getHandleredMail() {
	$.ajax({
		url: URL + 'Handlemail/handledDistributedList',
		type: 'POST',
		dataType: 'json',
		data: {
			'username' : session.username
		},
	})
	.done(function(data) {
		console.log(data);
		if (data.status) {
			$.each(data.data, function(index, obj) {
				console.log(obj);
				var from = obj.from;//发送人员
				var title = obj.title;//主题
				var duser_name = obj.duser_id;//分发人员id
				var deadline = obj.deadline;//截止日期
				var update_time = obj.update_time;//更新时间
				var mail_id = obj.mail_id;//mail id										
				var text = '<tr data-id='+mail_id+'>'
							+'<td class="tc"><input id='+mail_id+' type="checkbox"></td>'
							+'<td>'+from+'</td>'
							+'<td><a href="detail.html" >'+title+'</a></td>'
							+'<td>'+update_time+'</td>'
							+'<td>'+deadline+'</td>'
							+'<td>'
                            +'<a>'+duser_name+'</a>'
                            +'</td>'
                            +'<td>'
                            +'<button class="btn btn-default">删除</button>'
                            +'</td>'
                            +'</tr>';                
                $(".result-tab").append(text);                
			});
		};
		console.log(session.username + " getHandleredMail success");
	})
	.fail(function() {
		console.log("getHandleredMail error");
	})
	.always(function() {
		console.log("getHandleredMail complete");
	});
	
}


