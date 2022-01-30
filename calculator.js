// function addition() {
//     var displaya=document.getElementById(".display1")
//     var displayb=document.getElementById(".display2")
//     var displayc=document.getElementById(".display3")
//     var numbers=document.getElementByIdall(".number")
//     var operations=document.getElementByIdall(".operation")
//     var equal=document.getElementById(".equal")
//     var lastclear=document.getElementById(".last item")
//     var allclear=document.getElementById(".all clear")


// }
// let result=document.getElementById("input");
// function cal(number)
// {
//     result.value+=number
// }
let screen=document.getElementById("screen")
function view(num)
{
    document.getElementById("screen").value=document.getElementById("screen").value+num;
}
function equal()
{
    let x=document.getElementById("screen").value
    let y=eval(x)
    document.getElementById("screen").value=y;
}
function clr()
{
    document.getElementById("screen").value=""
}
function lastitem()

{
    // let newOne=screen.substring(screen.length-1);
    document.getElementById("screen").value=screen.value.slice(0,-1)
    // it will delete the last item when we use -1 when we not select anything like0,-1 then it will delete the last item
}