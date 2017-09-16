/**
 *For K9
 */
//找到男装下第一类衣服中的第一个p元素，并改变颜色
//可以通过子类选择器  p:first-child 筛选出第一个p元素
$("#menu_con .tag dd>p:first-child").css('color', '#9932CC');

//找到男装下第一类衣服把a元素从顺序1-4加上颜色
//可以通过基本筛选器lt,选择匹配集合中所有索引值小于给定index参数的元素
//注意了index是从0开始计算，所以选在1-4,为对应的index就是4
$("#menu_con .tag dd a:lt(4)").css('color', 'red');

//找到男装所有a元素中属性名name="setColor"的元素，并设置颜色
//这里用的属性选择器[attribute='value']选择指定属性是给定值的元素
$("#menu_con a[name='setColor']").css('color', '#66CD00');

//不分男女，选中第一类衣服中第9个a元素，并改变颜色
//这里用了nth-child 选择的他们所有父元素的第n个子元素
$(".tag a:nth-child(10)").css('color', 'blue');

//找到女装下第一类衣服，把a元素中包含文字"更多"的节点，改变颜色
$("#menu_female .tag a:contains('更多')").css('color', '#C71585');
