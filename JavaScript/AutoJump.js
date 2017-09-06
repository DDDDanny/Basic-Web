/*为自动跳转页面提供JS*/
var num = document.getElementById("num").innerHTML;
function count() {
  num--;
  document.getElementById("num").innerHTML = num;
  if (num == 0) {
    location.assign("http://www.baidu.com");
  }
}
setInterval(count, 1000);//每1000ms（1s）执行一次函数
