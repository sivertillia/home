$(document).ready(function() {
    // Sign in
    login = prompt('Login:', '');
    password = prompt('Password:', '');
    login_siv = "sivert";
    password_siv = "qwe";
    login_gus = "gus";
    password_gus = "zxc";
    login_test = "test";
    password_test = "123";
    if (login == login_siv && password == password_siv || login == login_gus && password == password_gus || login == login_test && password == password_test) {
        alert("YES");
    }
    else if (login == login_siv || login == login_gus || login == login_test) {
        alert('Пароль неверный!'), top.location.href=""
    }
    else { alert('Логин не найден!'), top.location.href="" }



    // alert("Сайт Іллі");
    // elem.onclick = link;
    // //id.on<событие> = nameFuction;
    // function link() {
    //     alert("Help me!");
    // };




    $( "#viss" ).mousedown(function() {
        pass.setAttribute("type", "text");
        viss.setAttribute("class", "fa fa-eye");
    });
    $( "#viss" ).mouseup(function() {
        pass.setAttribute("type", "password");
        viss.setAttribute("class", "fa fa-eye-slash");
    });

});