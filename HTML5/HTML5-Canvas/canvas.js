var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//!Rectangle

// c.fillStyle = "rgba(0,0,255,0.6)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0,255,0,0.6)";
// c.fillRect(200, 200, 100, 100);
// c.fillStyle = "rgba(255,0,255,0.6)";
// c.fillRect(300, 300, 100, 100);

//?Lines
// c.beginPath();
// c.moveTo(50, 100);
// c.lineTo(200, 100);
// c.lineTo(400, 200);
// c.lineTo(400, 120);
// c.strokeStyle = 'blue';
// c.stroke();

//Arcs/Circles

// for(var i = 0; i < 60; i++) {
//     var startAngle = Math.random() * canvas.width;
//     var endAngle = Math.random() * canvas.height;
//     c.beginPath();
//     c.arc(startAngle,endAngle,30,0,Math.PI * 2, false);
//     c.strokeStyle = `rgba(120,${Math.random()*200},230,0.6)`
//     c.stroke()
// }
var x = Math.random() * 100
var dx = 1
var radius = 30
function animate() {
    var c = canvas.getContext('2d');
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight);
    c.beginPath();
    c.arc(x,300,radius,0,Math.PI * 2, false);
    c.strokeStyle = `blue`
    c.stroke()
    c.fill()
    if(x + radius > innerWidth || x - radius > 0) {
        dx = -dx
    }
    x += dx
}
animate()