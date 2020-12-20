
var date = 7

for (var i = 0; i<date; i++) {
  document.querySelectorAll(".open")[i].addEventListener("click", function() {
    this.style.display = "none"
    var choice = (this.className.slice(0, -5))
    document.querySelector("." + choice + "-img").style.display = "block"
  });
}

// document.querySelectorAll(".open").length

for (var i = 1; i <= date; i++) {
  document.querySelector(".circle-" + i.toString()).style.background = "#143d02"
}
