/*
时间相关js
*/
var mydate = new Date();

var year = mydate.getFullYear();
var month = mydate.getMonth();
var day = mydate.getDate();
document.getElementById("year").innerHTML = year;
document.getElementById('month').innerHTML = month+1;
document.getElementById('day').innerHTML = day;
document.getElementById('count').innerHTML = "0"+(29 - day);

var pic = document.getElementById('pic');
var nume = ((29 - day + 1) * 76 - 38);//将距离转化为数学模型
pic.style.right = nume+"px";//使用js变量调整css样式

function clock()
{
   var time = new Date();
   var hour = time.getHours();
   var minute = time.getMinutes();
   var second = time.getSeconds();
   document.getElementById('hour').innerHTML = hour;
   document.getElementById('min').innerHTML = minute;
   document.getElementById('sec').innerHTML = second;

}
setInterval(clock , 1000);

/*
..........
*/
window.onload = function() {
  var like = document.getElementsByName('likefood');
  var jud = 19 - (29 - day);
  for (var i = 0; i < like.length; i++) {
    if (i <= jud) {
      like[i].innerHTML = "";
    }
  }
  //console.log(like.length);
};
