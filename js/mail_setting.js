var URL = "http://localhost/xmail/index.php/Home/"
// http://localhost/xmail/index.php/Home/Admin/getMailInfo
$(document).ready(function() {
	$.ajax({
            // url: URL + 'Admin/setMailInfo',
            url: 'http://www.sxbox.cc/xmail/index.php/Home/Admin/getMailInfo',
            type: 'POST',
            dataType: 'json',
            data: null
        })
		.done(function(data) {
        	console.log(data);
        	$("#address").attr('value', data.data['address']);
        	$("#password").attr('value', data.data['password']);
        	$("#mailserver").attr('value', data.data['mailserver']);
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

     
});
function submitInfo() {
    var info = {
    	'id': 1,
        'address': $("#address").val(),
        'password': $("#password").val(),
        'mailserver': $("#mailserver").val()
    }

    console.log(info);

     $.ajax({
            // url: URL + 'Admin/setMailInfo',
            url: 'http://www.sxbox.cc/xmail/index.php/Home/Admin/setMailInfo',
            type: 'POST',
            dataType: 'json',
            data: info
        })
        .done(function(data) {
        	console.log(data);
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

}

$("#submitInfo").click(function() {
    submitInfo();
})
