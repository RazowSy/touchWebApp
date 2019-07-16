var mouseDown = false;

function getClickPosition(e) {
    var xPosition = e.clientX;
    var yPosition = e.clientY;
    document.getElementById("place").innerHTML = "x : " + xPosition + ", y : "+ yPosition;
    document.getElementById("place").style.left = (xPosition+30) +"px";
    document.getElementById("place").style.top = yPosition+"px";
    mouseDown = true;
    document.getElementById("mainf").onmousemove = function(event){
    if (mouseDown == true){
        document.getElementById("place").innerHTML = "click on x :" + event.clientX + ", y : "+ event.clientY;
        document.getElementById("place").style.left = (event.clientX+30) +"px";
        document.getElementById("place").style.top = event.clientY+"px";
    }
}

}
function deletePosition(e){
    document.getElementById("place").innerHTML ="";
    mouseDown = false;
}




$(window).load(function() {
 // executes when complete page is fully loaded, including all frames, objects and images
 Pressure.set('#mainf', {
  change: function(force, event){
    console.log(force);
    this.innerHTML = force;
  },
  unsupported: function(){

    console.log("Oh no, this device does not support pressure.")
  }
}, {polyfill: false});
});