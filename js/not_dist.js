var URL = "http://www.sxbox.cc/xmail/index.php/Home/";
var session = window.sessionStorage;

$(document).ready(function() {
	$.ajax({
		url: URL+'Email/getNeedEmailList',
		type: 'POST',
		dataType: 'json',
		data:""
	})
	.done(function(data) {
		if (data.status) {
			$.each(data.data, function(index, obj) {
				var email_id = obj.id;
				var email_title = obj.title;
				var email_content = obj.content;
				var email_from = obj.from;
				var isdistributed = obj.isdistributed;
				var create_time = obj.create_time;
				var update_time = obj.update_time;

				var text = '<tr data-id='+email_id+'>'
							+'<td class="tc"><input id='+email_id+' type="checkbox"></td>'
							+'<td>'+email_from+'</td>'
							+'<td><a href="detail.html" >'+email_title+'</a></td>'
							+'<td>'+create_time+'</td>'
							+'<td>'
                            +'<a>'+isdistributed+'</a>'
                            +'</td>'
                            +'<td>'
                            +'<button class="btn btn-default">删除</button>'
                            +'</td>'
                            +'</tr>';
                $(".result-tab").append(text);

			});
		}
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

	//checkbox全选
	$(".allchoose").click(function(event) {
		allchoose();
	});


	
});

function allchoose(){
	console.log('test');
	if ($(".allchoose").checked) {
	}
}

