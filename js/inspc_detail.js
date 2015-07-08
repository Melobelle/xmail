var URL = "http://www.sxbox.cc/xmail/index.php/Home/";
var session = window.sessionStorage;

$(document).ready(function() {
	 console.log(session.chooseid);
    getContent();
    sendback();
    $("#username").text(session.username);
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
            var obj = data.data[0];
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
                var content = '邮件内容:<br/><span>'+email_content+'</span><br/><br/><br/><br/><hr/>回复内容：<br/><span>'+reply_content+'</span>';
                $("#content").html(content);
                console.log('获取邮件内容成功');
            }   
        })
        .fail(function() {
            console.log('获取邮件内容失败');
        })
        .always(function() {
        });

}

function sendback(){
    $("#sendback").click(function(){
        var info = {
            'email_id':session.chooseid,
            'message':$("#editor").val()
        }
        $.ajax({
            url: URL+'Check/checkMessage',
            type: 'POST',
            dataType: 'json',
            data: info
        })
        .done(function(data) {
            console.log("邮件送回重新审核成功");
            if (data.status) {
                iosOverlay({
                        text: "发送成功!",
                        duration: 2e3,
                        icon: 'images/check.png'
                    });
            }

        })
        .fail(function() {
            console.log("邮件送回重新审核失败");
            iosOverlay({
                        text: "发送失败!",
                        duration: 2e3,
                        icon: 'images/cross.png'
                    });
        })
        .always(function() {
        });
        
    })
}