var countDownDate = new Date("Jan 5, 2021 00:00:00").getTime();
document.getElementById("base").innerHTML = "January 5 - 2021 - 00:00:00"

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("base").innerHTML = "EXPIRED";
    days = hours = minutes = seconds = 0
  }

  document.getElementById("D").innerHTML = days + " d "
  document.getElementById("H").innerHTML = hours + " h "
  document.getElementById("M").innerHTML = minutes + " m "
  document.getElementById("S").innerHTML = seconds + " s "


}, 1000);