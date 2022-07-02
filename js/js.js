var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var ratio = window.devicePixelRatio;
canvas.height = window.innerHeight*ratio;
canvas.width = window.innerWidth*ratio;

class ball{
				constructor(x,y){
								this.x = x;
								this.y = y;
								this.radius = 5;
								this.vx =Math.random()*6 -3;
								this.vy = Math.random()*6 -3;
								this.angle = Math.random() * 6.2;															
								this.color = 100;
				}
				draw(){
							 if(this.radius <= 15){
												c.beginPath();
												//c.lineWidth = 0.2;
												c.shadowBlur = 10;
												c.shadowColor = "#0003";
												c.arc(this.x,this.y,this.radius,0,Math.PI*2);
												c.fillStyle = "hsl(299,100%,"+this.color+"%)";
												c.fill();
												//c.stroke();
											 this.radius	+= Math.random() * 0.5;
											 this.x+=this.vx + Math.sin(this.angle);
												this.y+=this.vy + Math.sin(this.angle);
											 this.angle	+= 0.2;
											 //this.color += 2;
											 	window.requestAnimationFrame(this.draw.bind(this));
							 }
				}
}




canvas.addEventListener("touchmove",function(e){
			  let x = e.touches[0].clientX*ratio;
			  let y = e.touches[0].clientY*ratio;
			  for(let i = 0; i<= 1;i++){
			  				let b = new ball(x,y);
			  				b.draw();
			  }
})

