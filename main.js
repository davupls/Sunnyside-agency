const h1 = document.querySelector("h1");
let arrowImage = document.querySelector(".arrow");
let viewport = window.innerWidth;

window.addEventListener("resize", function(){
    if (viewport > 500) {
        viewport = this.window.innerWidth
        arrowImage.width = viewport / 40;
        console.log("Viewport: ", viewport, "\nArrow: ", arrowImage.width);
    } else {
        console.log("Something is wrong.")
    }
})