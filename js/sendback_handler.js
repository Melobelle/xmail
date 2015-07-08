var URL = "http://www.sxbox.cc/xmail/index.php/Home/";
var session = window.sessionStorage;

$(document).ready(function() {
    $.ajax({
            url: URL + 'Handlemail/getNotPassedMailList',
            type: 'POST',
            dataType: 'json',
            data: {'user_id':session.user_id}
        })
        .done(function(data) {
            console.log('获取回退邮件成功');
            console.log(data);
            if (data.status) {
                $.each(data.data, function(index, obj) {
                    var email_id = obj.mail_id;
                    var email_title = obj.title;
                    var email_content = obj.content;
                    var email_from = obj.from;
                    var ishandle = obj.ishandle;
                    var create_time = obj.create_time;
                    var update_time = obj.update_time;
                    var text = '<tr data-id=' + email_id + '>' 
                                + '<td class="tc"><input id=' + email_id + ' type="checkbox"></td>' 
                                + '<td>' + email_from + '</td>' 
                                + '<td><a data-detail=true data-id='+ email_id +' href="detail_deal_sendback.html" >' + email_title + '</a></td>' 
                                + '<td>' + create_time + '</td>' 
                                + '<td>' + '<a>' + ishandle + '</a>' + '</td>' 
                                + '</tr>';
                    $(".result-tab").append(text);

                });
            }
        })
        .fail(function() {
            console.log('获取回退邮件失败');
        })
        .always(function() {
        });

    //checkbox全选
    $(".allchoose").click(function(event) {
        allchoose();
    });

    //选取一封邮件
    detail();
});

function allchoose() {
    if ($(".allchoose").is(":checked")) {
        // console.log('checked');
        $("input[type=checkbox]").prop('checked', true);
    } else {
        // console.log('notchecked');
        $("input[type=checkbox]").prop('checked', false);
    }
}


function detail(){
    $(".result-tab").on('click',function(e){
        var obj = e.target;
        if ($(obj).attr('data-detail')) {
            session.chooseid = $(obj).attr('data-id');
        }
    })
}