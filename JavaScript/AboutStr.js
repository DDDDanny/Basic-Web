/*为AboutStr提供JS*/
/*
  拆分字符串，提取成绩，计算总分和平均分（由于渲染顺序，这段JS需要写在body中）
*/
// var scoreStr = "小明:87;小花:81;小红:97;小天:76;小张:74;小小:94;小西:90;小伍:76;小迪:64;小曼:76";
// var mybox = scoreStr.split(';');
// var sum = 0;
// for (var i = 0; i < mybox.length; i++) {
//   //确定数字部分初始位置
//   var mynum = mybox[i].indexOf(":") + 1;
//   //提取数字部分
//   var mynum2 = mybox[i].slice(mynum);
//   //将字符串转化为整数
//   var num = parseInt(mynum2);
//   //求和
//   sum = sum + num;
// }
// document.getElementById('sum').innerHTML = sum;
// //求平均数取整
// var svn = Math.round(sum/mybox.length);//取整
// document.getElementById('svn').innerHTML = svn;

/*
  为复选框全选提供JS
*/
function checkall()
{
    var hobby = document.getElementsByTagName('input');
    for (var i = 0; i < hobby.length; i++) {
      if (hobby[i].type == "checkbox") {
        hobby[i].checked = true;
      }
    }
}

function clearcheck()
{
  var hobby = document.getElementsByTagName('input');
  for (var i = 0; i < hobby.length; i++) {
    if (hobby[i].type == "checkbox") {
      hobby[i].checked = false;
    }
  }
}
