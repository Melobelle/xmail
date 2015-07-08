function submitUser() {
    var info = {
        'username': $("#username").val(),
        'password': $("#password").val(),
        'nickname': $("#nickname").val(),
        'role'  :   $("#role").val()
    }

    console.log(info);

     $.ajax({
            // url: URL + 'Admin/setMailInfo',
            url: 'http://www.sxbox.cc/xmail/index.php/Home/Admin/addUser',
            type: 'POST',
            dataType: 'json',
            data: info
        })
        .done(function(data) {
            console.log(data);
            console.log("success");
            alert('添加成功');
            window.location.href = 'setting.html'
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

}

$("#submitUser").click(function() {
    submitUser();
})
