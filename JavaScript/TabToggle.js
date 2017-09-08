/*选项卡切换相关js*/
window.onload = function()
{
  var ula = document.getElementById('taptitle');
  var ali = ula.getElementsByTagName("li");
  var main = document.getElementById('maindiv');
  var secdiv = main.getElementsByTagName("div");

  for (var i = 0; i < ali.length; i++)
  {
    ali[i].x = i;
    ali[i].onmouseover = function()
    {
      for (var i = 0; i < ali.length; i++) {
        ali[i].className = "";
      }
      this.className = "act";
      for (var j = 0; j < secdiv.length; j++) {
        secdiv[j].className = "txt";
      }
      secdiv[this.x].className = "show";
    };
  }
};
