var URL = "http://www.sxbox.cc/xmail/index.php/Home/"

var session = window.sessionStorage;




//登陆开始
function login() {
    //传入username && password
    var info = {
        'username': $("#username").val(),
        'password': $("#password").val()
    }

    $.ajax({
            url: URL + 'User/login',
            type: 'POST',
            dataType: 'json',
            data: info
        })
        .done(function(data) {
            console.log(data);
            if (data.status) {
                session.username = $("#username").val();
                var tp = data.data.role;
                session.user_id = data.data.user_id;
                console.log(tp);
                console.log(data.data.user_id);
                switch (tp) {
                    case '1':
                        window.location.href = "distributor.html";
                        break;
                    case '2':
                        window.location.href = "handler.html";
                        break;
                    case '3':
                        window.location.href = "inspector.html";
                        break;
                    case '4':
                        window.location.href = "setting.html";
                        break;
                }
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



$("#login").click(function() {
    login();
})
