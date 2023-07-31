var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillStyle = "rgba(0,0,255,0.6)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0,255,0,0.6)";
c.fillRect(200, 200, 100, 100);
c.fillStyle = "rgba(255,0,255,0.6)";
c.fillRect(300, 300, 100, 100);