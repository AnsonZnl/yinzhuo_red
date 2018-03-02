//导航
var nav=document.getElementById("js_nav");
var box=document.getElementById("js_box");
nav.onclick=function (ev) {
    if(box.className=="box"){
        box.className="box none"
    }else {
        box.className="box"
    }
};
// 选项卡
var li =document.querySelectorAll(".list_li");
var box1 =document.querySelectorAll(".box1");
for (var i=0;i<li.length;i++){
    li[i].index=i;
    li[i].onclick=function (ev) {
        for(var i=0;i<box1.length;i++){//先清空所有的样式
            li[i].classList.remove("nav_active");  //循环清空li样式
            box1[i].style.display='none';  //循环隐藏所有div
        }
        this.classList.add("nav_active");  //当前点击的元素样式变成active
        box1[this.index].style.display='block';    //this.index 获取当前li对应的索引
    }
}