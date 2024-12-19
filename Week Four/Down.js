let countDownDate = new Date("Sep 11, 2025 00:00:00").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("Down").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("down").innerHTML = "00:00:00";
  }
}, 1000);
let body = document.getElementById("body");
body.style.margin = "auto";
body.style.maxWidth = "50%";
let downn = document.getElementById("Down");
downn.style.marginTop = "40%"
downn.style.fontFamily = "Courier New", "Courier", "monospace"
downn.style.fontWeight = "900"
downn.style.fontSize = "38px"
downn.style.backgroundColor = "rgba(8, 216, 112, 0.623)"