window.requestAnimationFrame = function() {
    return (
        window.requestAnimationFrame || 
        window.webkitURLRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback);
        }
    );
    }

function init(elemid){
    let canvas = document.getElementById(elemid),
    c=canvas.getContext("2d"),
    w=(canvas.width = window.innerWidth)
    h=(canvas.height = window.innerHeight);
   c.fillStyle = "rgba(255,255,255,0)";
   c.fillRect(0,0,w,h);
   return { c: canvas, canvas: canvas};
}

window.onload = function(){
    let c = init("canvas").c,
    canvas=init("canvas").canvas,
    w=(canvas.width = window.innerWidth)
    h=(canvas.height = window.innerHeight);
}