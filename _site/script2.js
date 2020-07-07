
//Modal for showing what is in the played modifier deck

var zoomModal = document.getElementById("zoomModal");
var close = document.getElementsByClassName("close")[0];
playedModifiers.onclick = function() {
  zoomModal.style.display = "block";
    }

close.onclick = function() {
    zoomModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == zoomModal) {
        zoomModal.style.display = "none";
    }
}
