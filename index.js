
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

// 2 Buttons für Admin Mode an und aus

function activateAdmin() {
var openButtons = document.querySelectorAll(".open");
i = 0;
l = openButtons.length;
 
for (i; i < l; i++) {
  openButtons[i].style.display = "none";
}

var uploadButtons = document.querySelectorAll(".upload");
i = 0;
l = uploadButtons.length;
 
for (i; i < l; i++) {
  uploadButtons[i].style.display = "block";
}
} 


function deactivateAdmin() {
var openButtons = document.querySelectorAll(".open");
i = 0;
l = openButtons.length;
   
for (i; i < l; i++) {
  openButtons[i].style.display = "block";
}

var uploadButtons = document.querySelectorAll(".upload");
i = 0;
l = uploadButtons.length;
   
for (i; i < l; i++) {
  uploadButtons[i].style.display = "none";
}
}


//Dropzone Upload nicht funktional (TEST)
/*
Dropzone.options.dropzoneFrom = {
  autoProcessQueue: false,
  acceptedFiles:".png,.jpg,.gif,.bmp,.jpeg",
  init: function(){
   var submitButton = document.querySelector('#submit-all');
   myDropzone = this;
   submitButton.addEventListener("click", function(){
    myDropzone.processQueue();
   });
   this.on("complete", function(){
    if(this.getQueuedFiles().length == 0 && this.getUploadingFiles().length == 0)
    {
     var _this = this;
     _this.removeAllFiles();
    }
    list_image();
   });
  },
 };
*/