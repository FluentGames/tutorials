
var pong;

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

wall = {
  x: 0,
  y: 0
}

board = {
  width: 400,
  height: 150,
  walls: [

  ]
  init: function(width, heigh){
    this.width = width
    this.heigh = heigh
  }
}

pong ={
  ball: ball,
  board: board,
  init: function (id, width, height){
    canvas = document.getElementById(id)
    ctx = canvas.getContext("2d")
    board.width = width
    board.height = height
  }
  start: function(){

  }
}

pong.init()
pong.start();
