$(document).ready(function(){
    var name_list = new Array();
    for(var i=1;i<7;i++){
        name_list.push("mouse" + i.toString() + "_cart");
        name_list.push("phone" + i.toString() + "_cart");
        name_list.push("headphone" + i.toString() + "_cart");
        name_list.push("keyboard" + i.toString() + "_cart");
    }
    var mark = 0;
    var add_list = new Array();
    for(var key of name_list){
        if(localStorage.getItem(key)==1){
            add_list.push(key);
            mark = 1;
        }
    }
    var dic = {
        "headphone1_name":"Razer Nari","headphone1_price":"230","headphone1_store":"Razer Store","headphone1_html":"razer",
        "headphone2_name":"Hammer","headphone2_price":"430","headphone2_store":"Zowie Store","headphone2_html":"zowie",
        "headphone3_name":"Logitech H340","headphone3_price":"330","headphone3_store":"Logi Store","headphone3_html":"logitech",
        "headphone4_name":"Bose NC700","headphone4_price":"2000","headphone4_store":"Bose Store","headphone4_html":"bose",
        "headphone5_name":"Solo Wireless","headphone5_price":"1990","headphone5_store":"Beats Store","headphone5_html":"beats",
        "headphone6_name":"Bose QC35","headphone6_price":"2550","headphone6_store":"Bose Store","headphone6_html":"bose",
        "phone1_name":"iphone XR","phone1_price":"5500","phone1_store":"Apple Store","phone1_html":"apple",
        "phone2_name":"Mate 30 Pro","phone2_price":"5400","phone2_store":"Huawei Store","phone2_html":"huawei",
        "phone3_name":"Meizu 16Xs","phone3_price":"2290","phone3_store":"Meizu Store","phone3_html":"meizu",
        "phone4_name":"Galaxy S10","phone4_price":"7500","phone4_store":"Samsung","phone4_html":"samsung",
        "phone5_name":"vivo NEX 3","phone5_price":"5599","phone5_store":"vivo Official Store","phone5_html":"vivo",
        "phone6_name":"iphone 8 plus","phone6_price":"4999","phone6_store":"Apple Store","phone6_html":"apple",
        "mouse1_name":"DeathAdder","mouse1_price":"250","mouse1_store":"Razer Store","mouse1_html":"razer",
        "mouse2_name":"Logitech G502","mouse2_price":"350","mouse2_store":"Logi Store","mouse2_html":"logitech",
        "mouse3_name":"Zowie S2","mouse3_price":"530","mouse3_store":"Zowie Store","mouse3_html":"zowie",
        "mouse4_name":"Rival 600","mouse4_price":"180","mouse4_store":"SteelSeries","mouse4_html":"steelseries",
        "mouse5_name":"Razer Mamba","mouse5_price":"500","mouse5_store":"Razer Store","mouse5_html":"razer",
        "mouse6_name":"Logitech G903","mouse6_price":"979","mouse6_store":"Logi Store","mouse6_html":"logitech",
        "keyboard1_name":"BlackWidow","keyboard1_price":"799","keyboard1_store":"Razer Store","keyboard1_html":"razer",
        "keyboard2_name":"Logitech G813","keyboard2_price":"1100","keyboard2_store":"Logi Store","keyboard2_html":"logitech",
        "keyboard3_name":"Apex 7","keyboard3_price":"500","keyboard3_store":"SteelSeries","keyboard3_html":"steelseries",
        "keyboard4_name":"Zowie BenQ","keyboard4_price":"800","keyboard4_store":"Zowie Store","keyboard4_html":"zowie",
        "keyboard5_name":"Corsair K70","keyboard5_price":"1990","keyboard5_store":"Corsair Store","keyboard5_html":"corsair",
        "keyboard6_name":"Huntsman","keyboard6_price":"1349","keyboard6_store":"Razer Store","keyboard6_html":"razer"
    }
    function add_html(name){
        name = name.replace("_cart","");
        var html = '<div class="row"><div class="col-md-3"><div class="height"><img id="' +name +'" title="' + dic[name+"_name"] + '" src="../img/' + name + '.jpg" draggable="true" ondragstart="drag(event)"  alt="' + dic[name+"_name"] + '"></div></div><div class="col-md-3"><div class="myorders">' + dic[name+"_price"] + '</div></div><div class="col-md-3"><div class="myorders"><a href="../HTML/' + name + '.html"><u>' + dic[name+"_name"] + '</u></a></div></div><div class="col-md-3"><div class="myorders"><a href="../HTML/' + dic[name+"_html"] + '.html"><u>' + dic[name+"_store"] + '</u></a></div></div></div>';
        $("#add").prepend(html);
    }
    if(mark==1){
        $("#nothing").remove();
        for(var item of add_list){
            add_html(item);
        }
    }
});
 //drag
 function allowDrop(ev)
 {
     ev.preventDefault();
 }
 
 function drag(ev)
 {
     ev.dataTransfer.setData("Text",ev.target.id);
 }
 
 function cart_remove(current_cart){
    localStorage.setItem(current_cart, 0);
}
 function drop(ev)
 {
     ev.preventDefault();
     var data=ev.dataTransfer.getData("Text");
     console.log(data);
     ev.target.appendChild(document.getElementById(data));
     $("#" + data).fadeOut(600);
     cart_remove(data + "_cart");
     setTimeout("location.reload()",600);
     
 }