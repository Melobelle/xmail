var URL = "http://www.sxbox.cc/xmail/index.php/Home/";
var session = window.sessionStorage;

$(document).ready(function() {
	 console.log(session.chooseid);
    getContent();
});

function getContent() {
    var email_id = session.chooseid;
    $.ajax({
            url: URL + 'Check/getAEmailList',
            type: 'POST',
            dataType: 'json',
            data: {
                'email_id': email_id
            }
        })
        .done(function(data) {
            console.log(data);
            var obj = data.data[0];
            console.log(obj);
            if (data.status) {
                var email_id = obj.mid;
                var email_title = obj.mtitle;
                var email_content = obj.mcontent;
                var email_from = obj.mfrom;
                var reply_content = obj.pcontent;
                var reply_from = obj.pfrom;

                $("#title").text(email_title);
                $("#from").text(email_from);
                $("#handler").text(reply_from);
                $("#content").append("邮件内容:<br/>"+email_content+"<br/><br/><br/><br/><hr/>回复内容：<br/>"+reply_content);
            }
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

}
