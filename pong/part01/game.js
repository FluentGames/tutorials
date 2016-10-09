
var ball;

function intro(){
  canvas = document.getElementById("gameCanvas")
  ctx = canvas.getContext("2d")
  update()
}

function update(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText("Pong", 300, 150)
  ball.update(ctx)
  setTimeout(intro, 1000/30);
}

ball ={
  x: 400,
  y: 200,
  r: 5,
  vx: 1,
  vy: 1,
  move: function(){
    this.x += this.vx
    this.y += this.vy
  },
  draw: function(ctx){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    ctx.stroke();
  },
  update: function(ctx){
    this.move()
    this.draw(ctx)
  }
}

intro();
