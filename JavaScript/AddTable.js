/*为表单动态添加行*/
function add()
{
// 为table添加子节点，即新添加一行
    var newtr = document.createElement("tr");
    var p = document.getElementById('table');
    p.appendChild(newtr);
// 为新的一行添加列
    var newnum = document.createElement("td");
    newnum.innerHTML = "cd004";
    var newname = document.createElement("td");
    newname.innerHTML = "Diver";
    var newact = document.createElement("td");
    newact.innerHTML = "<a href='javascript:;' onclick='del(this)'>删除</a>";

    newtr.appendChild(newnum);
    newtr.appendChild(newname);
    newtr.appendChild(newact);
}

//删除操作函数
function del(x)
{
    var tr = x.parentNode.parentNode;
    tr.parentNode.removeChild(tr);
}

//实现移动鼠标，改变表格背景颜色
window.onload = function()
{
    var mytr = document.getElementsByTagName('tr');
    for (var i = 1; i < mytr.length; i++)
    {
      changecolor(mytr[i]);
    }
};

function changecolor(x)
{
  x.onmouseover = function() {
    x.style.backgroundColor = "#f2f2f2";
  };
  x.onmouseout = function() {
    x.style.backgroundColor = "#fff";
  };
}
