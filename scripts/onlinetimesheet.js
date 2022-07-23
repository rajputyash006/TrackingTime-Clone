import navbar from "../scripts/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../scripts/footer.js";
document.getElementById("footer").innerHTML = footer();

let btn1 = document.getElementById("btnimg1");
let imgdiv = document.getElementById("yadiv72");
btn1.addEventListener("click", () => {
  imgdiv.innerHTML = null;
  let img = document.createElement("img");
  img.src =
    "https://trackingtime.co/wp-content/uploads/2020/04/landing-remote-teams-ind-RemoteTeam-bot-ilus-03.svg";
  imgdiv.append(img);
  btn1.style.backgroundColor = "black";
  btn1.style.color = "white";
  btn2.style.backgroundColor = "white";
  btn2.style.color = "black";
  btn3.style.backgroundColor = "white";
  btn3.style.color = "black";
  btn4.style.backgroundColor = "white";
  btn4.style.color = "black";
});

let btn2 = document.getElementById("btnimg2");
btn2.addEventListener("click", () => {
  imgdiv.innerHTML = null;
  let img = document.createElement("img");
  img.src =
    "https://trackingtime.co/wp-content/uploads/2020/05/landing-consultor-ind-Consultor-feature-03-1.svg";
  imgdiv.append(img);
  btn2.style.backgroundColor = "black";
  btn2.style.color = "white";
  btn1.style.backgroundColor = "white";
  btn1.style.color = "black";
  btn3.style.backgroundColor = "white";
  btn3.style.color = "black";
  btn4.style.backgroundColor = "white";
  btn4.style.color = "black";
});
let btn3 = document.getElementById("btnimg3");
btn3.addEventListener("click", () => {
  imgdiv.innerHTML = null;
  let img = document.createElement("img");
  img.src =
    "https://trackingtime.co/wp-content/uploads/2020/05/Timecard-ind-Timecard-bot-ilus-03@2x-585x400.png";
  imgdiv.append(img);
  btn3.style.backgroundColor = "black";
  btn3.style.color = "white";
  btn1.style.backgroundColor = "white";
  btn1.style.color = "black";
  btn2.style.backgroundColor = "white";
  btn2.style.color = "black";
  btn4.style.backgroundColor = "white";
  btn4.style.color = "black";
});

let btn4 = document.getElementById("btnimg4");
btn4.addEventListener("click", () => {
  imgdiv.innerHTML = null;
  let img = document.createElement("img");
  img.src =
    "https://trackingtime.co/wp-content/uploads/2020/04/Timecard-ind-Timecard-bot-ilus-02.svg";
  imgdiv.append(img);
  btn4.style.backgroundColor = "black";
  btn4.style.color = "white";
  btn1.style.backgroundColor = "white";
  btn1.style.color = "black";
  btn2.style.backgroundColor = "white";
  btn2.style.color = "black";
  btn3.style.backgroundColor = "white";
  btn3.style.color = "black";
});

import bottomlink from "../component/fetch.js";
document.getElementById("bottomlink").innerHTML = bottomlink();

// page are link here
let link1 = () => {
  window.location.href = "https://trackingtime.co/features/time-cards";
};

document.getElementById("bottomlink12").addEventListener("click", link1);

let link2 = () => {
  window.location.href = "https://trackingtime.co/features/project-management";
};

document.getElementById("bottomlink22").addEventListener("click", link2);

let link3 = () => {
  window.location.href = "https://trackingtime.co/features/attendance-tracker";
};

document.getElementById("bottomlink33").addEventListener("click", link3);

let link4 = () => {
  window.location.href = "onlinetimesheet.html";
};

document.getElementById("bottomlink44").addEventListener("click", link4);
