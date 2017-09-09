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
document.getElementById('count').innerHTML = 29 - day;

// var pic = document.getElementById('pic');
// pic.style.right = "((29 - day - 1) * 80)px";
// console.log((29 - day - 1) * 80);

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
