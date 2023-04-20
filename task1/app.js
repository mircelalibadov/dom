const btn1=document.getElementById("btn1")
const btn2=document.getElementsByClassName("btn2")
const btn3=document.getElementsByClassName("btn3")
btn1.style.cssText=`
background-color: green;
height: 200px;
`
btn2[0].style.cssText=`
background-color: red;
height: 200px;
`
btn3[0].style.cssText=`
background-color: blue;
height: 200px;
`
