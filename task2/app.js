const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const box = document.getElementById("box");

btn1.style.background = "red";
btn2.style.background = "yellow";
btn3.style.background = "blue";

btn1.onclick = function () {
  box.style.cssText = `
    background-color: red;
    width: 100px;
    height: 100px;
    margin:0 auto ;
    `;
};
btn2.onclick = function () {
    box.style.cssText = `
      background-color: yellow;
      width: 100px;
      height: 100px;
      margin:0 auto ;
      `;
  };
  btn3.onclick = function () {
    box.style.cssText = `
      background-color: blue;
      width: 100px;
      height: 100px;
      margin:0 auto ;
      `;
  };
    
