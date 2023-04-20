const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.onclick = function () {
  box.style.cssText = `
    width: 100px;
    height: 100px;
    margin: 0 auto;
    transition: 200ms;
    `;
box.style.backgroundColor="#"+Math.floor(Math.random()*12344555).toString(16)
};
