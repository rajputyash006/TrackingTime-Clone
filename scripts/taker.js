import navbar from "../navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../footer.js";
document.getElementById("footer").innerHTML = footer();

let btn1 = document.getElementById("takeBTN1");
let imgdiv = document.getElementById("taker_cloud");
btn1.addEventListener("click", () => {
  imgdiv.innerHTML = null;
  let img = document.createElement("img");
  img.src =
    "https://trackingtime.co/wp-content/uploads/2020/08/clockin-clockout.svg";
  imgdiv.append(img);
  btn1.style.backgroundColor = "#282828";
  btn1.style.color = "white";
  btn2.style.backgroundColor = "white";
  btn2.style.color = "#282828";
  btn3.style.backgroundColor = "white";
  btn3.style.color = "#282828";
  btn4.style.backgroundColor = "white";
  btn4.style.color = "#282828";
});

let btn2 = document.getElementById("takeBTN2");
btn2.addEventListener("click", () => {
  imgdiv.innerHTML = null;
  let img = document.createElement("img");
  img.src =
    "https://trackingtime.co/wp-content/uploads/2020/05/time-entrie.svg";
  imgdiv.append(img);
  btn2.style.backgroundColor = "#282828";
  btn2.style.color = "white";
  btn1.style.backgroundColor = "white";
  btn1.style.color = "#282828";
  btn3.style.backgroundColor = "white";
  btn3.style.color = "#282828";
  btn4.style.backgroundColor = "white";
  btn4.style.color = "#282828";
});
let btn3 = document.getElementById("takeBTN3");
btn3.addEventListener("click", () => {
  imgdiv.innerHTML = null;
  let img = document.createElement("img");
  img.src =
    "https://trackingtime.co/wp-content/uploads/2020/03/timesheets-app.svg";
  imgdiv.append(img);
  btn3.style.backgroundColor = "#282828";
  btn3.style.color = "white";
  btn1.style.backgroundColor = "white";
  btn1.style.color = "#282828";
  btn2.style.backgroundColor = "white";
  btn2.style.color = "#282828";
  btn4.style.backgroundColor = "white";
  btn4.style.color = "#282828";
});
