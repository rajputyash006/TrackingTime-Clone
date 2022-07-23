let btn1 = document.getElementById("timeBTN1");
let imgdiv = document.getElementById("timer_cloud");
btn1.addEventListener("click", () => {
  imgdiv.innerHTML = null;
  let img = document.createElement("img");
  img.src =
    "https://trackingtime.co/wp-content/uploads/2020/04/Timecard-ind-Timecard-bot-ilus-01@2x-2-585x400.png";
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

let btn2 = document.getElementById("timeBTN2");
btn2.addEventListener("click", () => {
  imgdiv.innerHTML = null;
  let img = document.createElement("img");
  img.src =
    "https://trackingtime.co/wp-content/uploads/2020/04/Timecard-ind-Timecard-bot-ilus-02.svg";
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
let btn3 = document.getElementById("timeBTN3");
btn3.addEventListener("click", () => {
  imgdiv.innerHTML = null;
  let img = document.createElement("img");
  img.src =
    "https://trackingtime.co/wp-content/uploads/2020/04/Timecard-ind-Timecard-bot-ilus-03.svg";
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

