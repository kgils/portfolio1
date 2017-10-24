<script>

var looper;
var degrees = 0;
function rotateAnimation(e1,speed){
  var imgspin = document.getElementById('e1');
  if(navigator.userAgent.match("Chrome")){imgspin.style.WebkitTransform) = "rotate("+degrees+"deg)";
} else if(navigator.userAgent.match("Firefox")){imgspin.style.MozTransform) = "rotate("+degrees+"deg)";
} else if(navigator.userAgent.match("MSIE")){imgspin.style.MsTransform) = "rotate("+degrees+"deg)";
} else if(navigator.userAgent.match("Opera")){imgspin.style.OTransform) = "rotate("+degrees+"deg)";
} else {
  imgspin.style.Transform) = "rotate("+degrees+"deg)";
}
looper = setTimeout('rotateAnimation(\''+e1+'\','+speed+')',speed);
degrees--;
if(degrees < -359) {
  degrees = -1;
}
document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}

</script>
