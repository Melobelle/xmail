$(document).ready(function() {
    $.ajax({
            // url: URL + 'Admin/setMailInfo',
            // url: 'http://www.sxbox.cc/xmail/index.php/Home/Admin/userList',
            url: 'http://www.sxbox.cc/xmail/index.php/Home/Admin/userList',
            type: 'POST',
            dataType: 'json',
            data: null
        })
        .done(function(data) {
            if (data.status) {

                $.each(data.data, function(index, obj) {
                    var id = obj.id;
                    var username = obj.username;
                    //console.log(obj);
                    var email_content = obj.content;
                    var role = obj.role;
                    var nickname = obj.nickname;
                    var text = '<tr data-id=' + id +'>'
                                + '<td class="tc"><input name="id[]" value="58" type="checkbox"></td>'
                                + '<td>'+username+'</td>'                                
                                + '<td>'+role+'</td>'
                                + '<td>'+nickname+'</td>'
                                + '<td>'
                                + '<input data-id'+ id +' onClick="deleteUser('+id+');" class="btn btn-primary" value="删除" type="button">'
                                + '</td>'
                                + '</tr>';
                    $(".result-tab").append(text);

                });
                $('#count_user').text(data.data.length + ' 条数据 1 / 1 页');
            }
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
});
$(".asd").click(function(event) {
 alert('123');
});

function deleteUser(id) {
    var info = {
        'id': id
    }
     $.ajax({
            // url: URL + 'Admin/setMailInfo',
            url: 'http://www.sxbox.cc/xmail/index.php/Home/Admin/deleteUser',
            type: 'POST',
            dataType: 'json',
            data: info
        })
        .done(function(data) {
            console.log(data);
            console.log("success");
            alert('删除成功');
            window.location.href = 'account_management.html'
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
}