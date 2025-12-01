
const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
 let x = 0;
let speed = 6;
let radius = 50;
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, 50, radius, 0, 2 * Math.PI);
    ctx.fill();
    x += speed;
    if (x + radius >= canvas.width){
        speed = -speed;
        ctx.fillStyle = "red";
        x = canvas.width - radius; // Correct position
    } else if (x - radius <= 0){
        speed = -speed;
        ctx.fillStyle = "black";
        x = radius; // Correct position
    } 


    
ctx.fillStyle = "green";
ctx.fillRect(100,100, 300, 300);
// ROOF
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(400, 100);
ctx.lineTo(250, 0);
ctx.fill();
//WINDOW
ctx.fillStyle = "blue"
ctx.fillRect(150, 150, 50, 50);
ctx.fillRect(300, 150, 50, 50);
ctx.fillRect(150, 225, 50, 50);
ctx.fillRect(300, 225, 50, 50);
ctx.fillRect(150, 300, 50, 50);
ctx.fillRect(300, 300, 50, 50);
//DOOR
ctx.fillStyle = "yellow"
ctx.fillRect(225, 300, 50, 100) 

    requestAnimationFrame(animate);
}
animate();