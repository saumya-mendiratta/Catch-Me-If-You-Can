var box = document.getElementById("box");

var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;


// Updates the viewport height and width dynamically
window.addEventListener("resize", function(event) {
    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight;
});



box.addEventListener("mouseover", function(event) {
    var boxAttr = box.getBoundingClientRect();
    
    var pos = getNewPosition(boxAttr.width, boxAttr.height);
    
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});



function getNewPosition(boxWidth, boxHeight) {
    
    // The boxWidth and boxHeight are subtracted so that they would not move out from the right and bottom direction
    var newX = Math.floor((Math.random() * viewWidth)+1  - boxWidth);
    var newY = Math.floor((Math.random() * viewHeight) +1 - boxHeight);

    // These will satisfy that box does not move go out in the top and left direction
    if(newX < 0) {
        newX = 0;
    }
    else if(newY < 0) {
        newY = 0;
    }
    else if(newX > window.innerWidth){
        newX=window.innerWidth-boxWidth;
    }
    else if(newY > window.innerHeight){
        newY=window.innerHeight-boxHeight;
    }
     
    return {x: newX, y: newY};
}