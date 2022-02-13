//BODY 
document.body.style.boxSizing = "border-box"
document.body.style.background = "hsl(217, 54%, 11%)";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.fontWeight = "bold";
document.body.style.letterSpacing = "1px";



//WRAPPER 
let wrapper = document.createElement("div");
wrapper.style.width = "300px";
wrapper.style.background = "hsl(216, 50%, 16%)";
wrapper.style.borderRadius = "12px";
wrapper.style.padding = "14px"
// wrapper.style.display = "flex";
// wrapper.style.flexDirection = "column";
// wrapper.style.justifyContent = "flex-start";
// wrapper.style.alignItems = "center";

//IMAGE 
let img = document.createElement("img");
img.src = "/images/image-equilibrium.jpg";
img.style.width = "100%";
// img.style.margin = "8px auto 8px auto";
img.style.borderRadius = "12px";
// img.style.marginTop = "14px";

//h3 
let h3 = document.createElement("h3");
h3.innerText = "Equilibrium #3429";
h3.style.color = "#fff";


//PARAGRAPH
let par = document.createElement("p");
par.innerText = "Our Equilibrium collection promotes balance and calm."
par.style.fontSize = "1.2rem";
par.style.color = "hsl(215, 51%, 70%)";



//ICON ETHERIUM
let icon = document.createElement("div");
let iconImg = document.createElement("img");
let author = document.createElement("p");
let iconClock = document.createElement("img");
let iconAuthor = document.createElement("img");
icon.style.color = "hsl(0, 0%, 100%)";
iconImg.style.float = "left";
iconImg.style.marginRight = "5px";
iconImg.src = "/images/icon-ethereum.svg"; 

icon.innerText = "0.041ETH";
iconClock.src = "/images/icon-clock.svg";
author.style.borderTop = "1px solid hsl(215, 51%, 70%)";
author.style.paddingTop = "20px";
iconAuthor.src = "/images/image-avatar.png";
iconAuthor.style.width = "30px";
author.innerText = "Creation of Jules Wyvern";
iconAuthor.style.float = "left";
iconAuthor.style.marginRight = "5px";
//PRICE 




//APPENDING
document.body.appendChild(wrapper);
wrapper.appendChild(img);
wrapper.appendChild(h3);
wrapper.appendChild(par);
wrapper.appendChild(icon);
icon.appendChild(iconImg);
icon.appendChild(iconClock);
icon.appendChild(author);
author.appendChild(iconAuthor);


alert("Я оцениваю свою работу на 100 баллов");