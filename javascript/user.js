//show baidu map
var long, lat;
function getLocation()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position)
{
    long = position.coords.longitude; 
    lat = position.coords.latitude;
}
function baidu(){
    var add =  $(".user a"); 
    add.before('<div class="user_text">' + 'Location: <span class="user_info">103.993214,30.770399</span>' + "</div>");
    var map = new BMap.Map("container"); 
    var point = new BMap.Point(103.993214,30.770399); 
    map.centerAndZoom(point, 15);  
    map.enableScrollWheelZoom(true);    
    map.addControl(new BMap.NavigationControl());    
    map.addControl(new BMap.ScaleControl());    
    map.addControl(new BMap.OverviewMapControl());    
    map.addControl(new BMap.MapTypeControl());    
}
$(document).ready(function () {
    getLocation();
    baidu();
    var user = localStorage.getItem("now_user");
    var add =  $(".user img");  
    add.after('<div class="user_text">' + "Phone number:" +'<span class="user_info">' + localStorage.getItem(user + "_phone") +'</span>' + "</div>");
    add.after('<div class="user_text">' + "User name:" +'<span class="user_info">'+ localStorage.getItem("now_user")+'</span>' + "</div>");
    add.after('<div class="user_text">' + "Age:" + '<span class="user_info">'+ localStorage.getItem(user + "_age")+'</span>' + "</div>");
});