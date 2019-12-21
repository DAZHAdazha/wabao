$(document).ready(function () {
    //verification code
    var random_num = "";
    function random(){
        random_num = "";
        for(var i=0;i<4;i++){
            var temp = Math.floor(Math.random()*10); 
            random_num += temp.toString();
        }
        var img_href = 'http://www.webxml.com.cn/WebServices/ValidateCodeWebService.asmx/enValidateImage?byString=' + random_num;
        return img_href;
    }
    
   var img_href = random();
    $("#verification_image").append('<img id="verification" title="verification code" src="' + img_href + '" alt="verification code">' +'<img id="refresh" title="refresh" src="../img/refresh.png" alt="refresh">');
    //form validator
    function get_val() {
        var val = $(this).val();
        var id = $(this).attr("id");
        if (id == "name") {
            if (val == $.trim(val) && val.length >= 6 && val.length <= 20) {
                $(this).parent().next().addClass("hidden");
                $(this).removeClass("red");
                $(this).addClass("green");
            } else {
                $(this).parent().next().removeClass("hidden");
                $(this).removeClass("green");
                $(this).addClass("red");
            }
        } else if (id == "age") {
            if (val == $.trim(val) && Number.isInteger(parseFloat(val)) && parseInt(val) >= 18 && parseInt(val) <= 120) {
                $(this).parent().next().addClass("hidden");
                $(this).removeClass("red");
                $(this).addClass("green");
            } else {
                $(this).parent().next().removeClass("hidden");
                $(this).removeClass("green");
                $(this).addClass("red");
            }
        } else if (id == "phone") {
            if (val == $.trim(val) && val.length==11) {
                $(this).parent().next().addClass("hidden");
                $(this).removeClass("red");
                $(this).addClass("green");
            } else {
                $(this).parent().next().removeClass("hidden");
                $(this).removeClass("green");
                $(this).addClass("red");
            }
        } else if (id == "password") {
            if (val == $.trim(val) && val.length>=8 && val.length<=32) {
                $(this).parent().next().addClass("hidden");
                $(this).removeClass("red");
                $(this).addClass("green");
            } else {
                $(this).parent().next().removeClass("hidden");
                $(this).removeClass("green");
                $(this).addClass("red");
            }
            if ($("#repeat-password").val() == $("#password").val()&&$.trim($("repeat-password").val())) {
                $("#repeat-password").parent().next().addClass("hidden");
                $("#repeat-password").removeClass("red");
                $("#repeat-password").addClass("green");
            } else {
                $("#repeat-password").parent().next().removeClass("hidden");
                $("#repeat-password").removeClass("green");
                $("#repeat-password").addClass("red");
            }
        } else if(id == "repeat-password") {
            if (val == $("#password").val()&&$.trim(val)) {
                $(this).parent().next().addClass("hidden");
                $(this).removeClass("red");
                $(this).addClass("green");
            } else {
                $(this).parent().next().removeClass("hidden");
                $(this).removeClass("green");
                $(this).addClass("red");
            }
        }
        else if(id == "verification_code"){
            if(val == random_num){
                $(this).parent().parent().parent().parent().next().addClass("hidden");
                $(this).removeClass("red");
                $(this).addClass("green");
            }
            else{
                $(this).parent().parent().parent().parent().next().removeClass("hidden");
                $(this).removeClass("green");
                $(this).addClass("red");
            }
        }
    }
    //local storage
    function store(username,password,age,phone){
        localStorage.setItem(username,password);
        localStorage.setItem(username + "_age",age);
        localStorage.setItem(username + "_phone",phone);
    }
    $(".form-control").each(function () {
       $(this).keyup(get_val);
       
    }) 
    function sign(){
        $(".form-control").each(get_val);
        if($("#name").parent().next().hasClass("hidden")&&$("#age").parent().next().hasClass("hidden")
        &&$("#phone").parent().next().hasClass("hidden")&&$("#password").parent().next().hasClass("hidden")
        &&$("#repeat-password").parent().next().hasClass("hidden")&&$("#verification_code").parent().parent().parent().parent().next().hasClass("hidden")){
            alert("sign up successfully!");
            store($("#name").val(),$("#password").val(),$("#age").val(),$("#phone").val());
            localStorage.setItem("now_user",$("#name").val());
            var href = "./user.html";
            window.location.replace(href);
        }
    }

    $("#sign-btn").click(sign);
    $('#verification_code').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            sign();
        }
    }); 
    
    $('#name').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            sign();
        }
    }); 
    
    $('#age').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            sign();
        }
    }); 
    
    $('#phone').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            sign();
        }
    }); 
    
    $('#password').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            sign();
        }
    }); 
    
    $('#repeat-password').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            sign();
        }
    }); 
    function refresh_image(){
       var img_href = random();
        $("#verification").attr("src",img_href);
    }
    $("#verification").click(function(){
        refresh_image();
        sign();
    });
    $("#refresh").click(function(){
        refresh_image();
        sign();
    });
});


