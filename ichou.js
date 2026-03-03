
const area =
document.querySelector(".ichou-area");

function createLeaf(){

const leaf =
document.createElement("img");

leaf.src="images/ichou.irasuto";
leaf.classList.add("ichou");

leaf.style.left=
Math.random()*100+"vw";

leaf.style.width=
20+Math.random()*30+"px";

leaf.style.animationDuration=
6+Math.random()*6+"s";

area.appendChild(leaf);

setTimeout(()=>{
leaf.remove();
},12000);
}

setInterval(createLeaf,600);
