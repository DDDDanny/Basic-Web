/*为日期选择器提供相关JS*/
var mydate = new Date();
//获取年份
var year = mydate.getFullYear();
document.getElementById("year").value = year;
//获取月份,由于月份是0-11，所以+1
var month = mydate.getMonth();
document.getElementById("month").value = month + 1;
//获取日期
var day = mydate.getDate();
document.getElementById("day").value = day;
//获取星期,getDay返回的是0-6数字。
var week = ["日","一","二","三","四","五","六"];
var num = mydate.getDay();
document.getElementById('week').value = week[num];
//获取时间
setInterval(clock, 1000);//每1s执行一次clock函数，模拟时钟
/*
  必须重新声明对象
*/
function clock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  document.getElementById('hour').value = hour;
  document.getElementById('min').value = minute;
  document.getElementById('sec').value = second;
}
