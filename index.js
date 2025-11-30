
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
    requestAnimationFrame(animate);
}
animate();