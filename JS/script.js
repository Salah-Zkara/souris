const root=document.getElementById("face1")
const root1=document.getElementById("face")
console.log(root)
function update() {
    x = event.clientX;
    y = event.clientY;
    console.log("x= "+x+"y= "+y)
    a=1520-x
    b=732-y
    root1.setAttribute("cx",String(a))
    root1.setAttribute("cy",String(b))
    //root.innerHTML=html
}
function ovr() {
    root1.classList.toggle("nor")
}
root.onmousemove=update
root1.onmouseenter=ovr
root1.onmouseleave=ovr