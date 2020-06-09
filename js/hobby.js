const pics_src = ["./img/hobby_cock/1.png","./img/hobby_cock/2.png","./img/hobby_cock/3.png","./img/hobby_cock/4.png","./img/hobby_cock/5.png"];
let num = -1;
 
 
function slideshow_timer(){
  if (num === 4){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}
 
setInterval(slideshow_timer, 2000);