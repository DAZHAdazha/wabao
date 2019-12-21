$(document).ready(function () {
    //search module
    var dic = {
        "razer nari": "headphone1",
        "hammer": "headphone2",
        "logitech h340": "headphone3",
        "bose nc700": "headphone4",
        "solo wireless": "headphone5",
        "bose qc35": "headphone6",
        "blackwidow": "keyboard1",
        "logitech g813": "keyboard2",
        "apex 7": "keyboard3",
        "zowie benq": "keyboard4",
        "corsair k70": "keyboard5",
        "huntsman": "keyboard6",
        "iphone xr": "phone1",
        "mate 30 pro": "phone2",
        "meizu 16xs 64gb": "phone3",
        "galaxy s10": "phone4",
        "vivo nex 3": "phone5",
        "iphone 8 plus": "phone6",
        "razer deathadder": "mouse1",
        "logitech g502": "mouse2",
        "zowie s2": "mouse3",
        "rival 600": "mouse4",
        "razer mamba": "mouse5",
        "logitech g903": "mouse6",
        "apple": "apple",
        "beats": "beats",
        "bose": "bose",
        "corsair": "corsair",
        "huawei": "huawei",
        "logitech": "logitech",
        "meizu": "meizu",
        "razer": "razer",
        "samsung": "samsung",
        "steelseries": "steelseries",
        "vivo": "vivo",
        "zowie": "zowie",
        "mouse": "mouse",
        "phone": "phone",
        "headphone": "headphone",
        "keyboard": "keyboard"
    }
    var path = window.location.href.toString();
    var length = path.length;
    var path_name = path.substring(length - 10, length - 5);

    function search() {
        var input = $("#search").val();
        if (normalize(input, dic)) {
            if (path_name != "index") {
                var href = "./" + dic[input.toLowerCase()] + ".html";
                window.location.replace(href);
            } else {
                var href = "./HTML/" + dic[input.toLowerCase()] + ".html";
                window.location.replace(href);
            }
        } else {
            if (path_name != "index") {
                window.location.replace("../HTML/404.html");
            } else {
                window.location.replace("./HTML/404.html");
            }
        }
    }

    function normalize(string_in, dic) {
        var low = string_in.toLowerCase();
        if (dic.hasOwnProperty(low)) {
            return true;
        } else {
            return false;
        }
    }
    $(".col-5.search-bar button").click(search);
    $(".col-md-6.search-bar button").click(search);

    $('#search').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            search();
        }
    });

    // center the modal 
    var $modal_btn = $('#modalBtn');
    var $modal = $('#myModal');
    $modal_btn.on('click', function () {
        $modal.modal({
            backdrop: 'static'
        });
    });
    $modal.on('show.bs.modal', function () {
        var $this = $(this);
        var $modal_dialog = $this.find('.modal-dialog');
        $this.css('display', 'block');
        $modal_dialog.css({
            'margin-top': Math.max(0, ($(window).height() - $modal_dialog.height()) / 2)
        });
    });
    //log in validator
    function log_in(){
        var input_Username = $("#input-username").val();
        var input_password = $("#input-password").val();
        if (input_password == localStorage[input_Username]) {
            localStorage.setItem("now_user",input_Username);
            if (path_name != "index") {
                var href = "./" + "user.html";
                window.location.replace(href);
            } else {
                var href = "./HTML/" + "user.html";
                window.location.replace(href);
            }
        } else {
            alert("wrong username or password");
        }
    }
    $("#login").click(log_in);
    $('#input-password').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            log_in();
        }
    }); 
    $('#input-username').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            log_in();
        }
    }); 
    //responsive web for phones and tablets
    function size() {
        var width = $(window).width();
        if (width <= 991) {
            $(".col-md-2.responsive").each(function () {
                $(this).removeClass("col-md-2");
                $(this).addClass("col-md-6");
            });
        } else {
            $(".col-md-6.responsive").each(function () {
                $(this).removeClass("col-md-6");
                $(this).addClass("col-md-2");
            });
        }
    }
    size();
    window.onresize = size;
    //star
    var path_split = path.split("/");
    var path_split_length = path_split.length;
    var current = path_split[path_split_length - 1].replace(".html", "");
    current_star = current + "_star";
    function star_toggle() {
        if (!localStorage.getItem(current_star) && localStorage.getItem(current_star) != 0) {
            localStorage.setItem(current_star, 1);
        } else {
            if (localStorage.getItem(current_star) == 1) {
                localStorage.setItem(current_star, 0);
            } else {
                localStorage.setItem(current_star, 1);
            }
        }
    }

    function check_status() {
        if (localStorage.getItem(current_star) == 1) {
            $(".star").attr("src", "../img/star.png");
        } else {
            $(".star").attr("src", "../img/unstar.png");
        }
    }
    check_status();
    $(".star").click(function () {
        star_toggle();
        check_status();
    });
    //add to cart
    current_cart = current + "_cart";
    function cart_add(){
        localStorage.setItem(current_cart, 1);
    }
    function cart_remove(){
        localStorage.setItem(current_cart, 0);
    }
    $("#add_cart").click(function(){
        cart_add();
        alert("You had added the product to cart successfully!");
    });
    $("#remove_cart").click(function(){
        cart_remove();
        alert("You had removed the product to cart successfully!");
    });
});