// 简易计算器相关JS
function count()
{
  var a = document.getElementById('txt1').value;
  var b = document.getElementById('txt2').value;
  var jud = document.getElementById('select').value;
  //判断是否为空
  if (a == '' || b == '') {
    alert("请输入必要数据！");
    return false;
  }
  //解析字符串返回浮点数
  var numa = parseFloat(a);
  var numb = parseFloat(b);
  //判断运算类型并计算
  var res;
  switch (jud) {
    case '+':
      res = numa + numb;
      break;
    case '-':
      res = numa - numb;
      break;
    case '*':
      res = numa * numb;
      break;
    case '/':
      res = numa / numb;
      break;
    case '%':
      res = numa % numb;
      break;
    default:
      res = "You Wrong!!!";
  }
  document.getElementById('txt3').value = res;
}
