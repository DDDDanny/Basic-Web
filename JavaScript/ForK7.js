/*...*/
window.onload = function () {
  var maindiv = document.getElementById('dropdown');
  var pic = document.getElementById('pic');

  pic.onmouseover = function () {
    maindiv.className = "show";
    pic.style.backgroundColor = "#dc0000";
    //修改的是pic的子节点元素
    pic.firstChild.style.color = "#ffffff";
  };
  pic.onmouseout = function () {
    maindiv.className = "no";
    pic.style.backgroundColor = "#ffffff";
    pic.firstChild.style.color = "black";
  };
};

/*之后用JQuery优化，使用toggle函数*/
