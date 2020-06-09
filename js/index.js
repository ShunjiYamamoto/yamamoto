$(function(){

    $('#datepicker').datepicker();

    $("#fadeIn").fadeIn(1500);
    
    setInterval(function(){
        
        var now = new Date();
        var y = now.getFullYear();
        var m = now.getMonth() + 1;
        var d = now.getDate();
        var w = now.getDay();
        var wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var h = now.getHours();
        var mi = now.getMinutes();
        var s = now.getSeconds();
        
        $('#date').text("日本標準時(JST):"+y+"/"+m+"/"+d+"/"+h+":"+mi+":"+s
        + "(" + wd[w] + ")");
    },1000);


});