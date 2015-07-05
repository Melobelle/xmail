var URL = "http://www.sxbox.cc/xmail/index.php/Home/";
var session = window.sessionStorage;

$(document).ready(function() {
    $.ajax({
            url: URL + 'Check/getNeedEmailList',
            type: 'POST',
            dataType: 'json',
            data: {'user_id':session.user_id}
        })
        .done(function(data) {
            if (data.status) {
                $.each(data.data, function(index, obj) {
                    var email_id = obj.mid;
                    var email_title = obj.mtitle;
                    var email_content = obj.mcontent;
                    var email_from = obj.mfrom;
                    var create_time = obj.pcreate_time;
                    var update_time = obj.pupdate_time;
                    var vstatus = obj.vstatus;

                    var text = '<tr data-id=' + email_id + '>' 
                                + '<td class="tc"><input id=' + email_id + ' type="checkbox"></td>' 
                                + '<td>' + email_from + '</td>' 
                                + '<td><a data-detail=true data-id='+ email_id +' href="dist_detail.html" >' + email_title + '</a></td>' 
                                + '<td>' + create_time + '</td>' 
                                + '<td>' + '<a>' + vstatus + '</a>' + '</td>' 
                                + '<td>' 
                                + '<button class="btn btn-default">删除</button>' 
                                + '</td>' 
                                + '</tr>';
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
    $("#email-list").on('click',function(e){
        var obj = e.target;
        if ($(obj).attr('data-detail')) {
            session.chooseid = $(obj).attr('data-id');
        }
    })
}