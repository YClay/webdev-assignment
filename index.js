// Neue Version
Dropzone.options.myAwesomeDropzone = {
  autoProcessQueue: true,
  maxFilesize: 10, //--> max. 10 MB pro Datei!
  maxFiles: 1,
  clickable: true,
  acceptedFiles: 'image/*',
  sending: function(file, xhr, formData) {
         formData.append("nr", this.element.name);
 
  },
  init: function() {
        this.on("complete", function(file) { 
              document.querySelector("." + this.element.name + "-img").style.backgroundImage="url(images/"+this.element.name+".jpg?t=" + Math.random() + ")"
            this.removeAllFiles()
        });
  }
 
 };


// Datumsmanipulation
function myDate() {
  var x = document.getElementById("mydate").value;
  var newdate = x.slice(0, 4) + x.slice(5, 7) + x.slice(8, 10)
  var newdatecal = newdate - 20201200

  for (var i = 1; i <= newdatecal; i++) {
    document.querySelector(".circle-" + i.toString()).style.background = "#143d02"

  }
  for (var i = newdatecal + 1;i < 25; i++) {
    document.querySelector(".circle-" + i.toString()).style.background = "#5a0101"
  }
  for (var i = 0; i < newdatecal; i++) {
    document.querySelectorAll(".open")[i].removeAttribute("disabled")
  }
  for (var i = newdatecal; i < 24; i++) {
    document.querySelectorAll(".open")[i].disabled = "true"
    document.querySelectorAll(".open")[i].style.display = "block"
    var choice = (document.querySelectorAll(".open")[i].className.slice(0, -5))
    console.log("." + choice + "-img")
    document.querySelector("." + choice + "-img").style.display = "none"
  }
}

for (var i = 0; i<24; i++) {
  document.querySelectorAll(".open")[i].addEventListener("click", function() {
    this.style.display = "none"
    var choice = (this.className.slice(0, -5))
    document.querySelector("." + choice + "-img").style.display = "block"
  });
}



// Datumsabfrage für aktueller Tag
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //Januar ist 0!
var yyyy = today.getFullYear();
  
var checkDoor = yyyy + mm + dd;
today = yyyy + '-' + mm + '-' + dd;
  
document.getElementById("mydate").value = today;



// Datum manipulieren
// Check which open
var date = checkDoor - 20201200;
for (var i = date; i < 24; i++) {
  document.querySelectorAll(".open")[i].disabled = "true"
  document.querySelectorAll(".open")[i].style.display = "block"
  var choice = (document.querySelectorAll(".open")[i].className.slice(0, -5))
  console.log("." + choice + "-img")
  document.querySelector("." + choice + "-img").style.display = "none"
}

for (var i = 1; i <= date; i++) {
  document.querySelector(".circle-" + i.toString()).style.background = "#143d02"
}



// 2 Buttons für Admin Mode an und aus
function activateAdmin() {    //Admin-Mode an
/*
var openButtons = document.querySelectorAll(".open");
i = 0;
l = openButtons.length;
 
for (i; i < l; i++) {
  openButtons[i].style.display = "none";
}
*/
var uploadButtons = document.querySelectorAll(".dropfield");
i = 0;
l = uploadButtons.length;
 
for (i; i < l; i++) {
  uploadButtons[i].style.display = "block";
}
} 


function deactivateAdmin() {    //Admin-Mode aus
/*
var openButtons = document.querySelectorAll(".open");
i = 0;
l = openButtons.length;
   
for (i; i < l; i++) {
  openButtons[i].style.display = "block";
}
*/
var uploadButtons = document.querySelectorAll(".dropfield");
i = 0;
l = uploadButtons.length;
   
for (i; i < l; i++) {
  uploadButtons[i].style.display = "none";
}
}