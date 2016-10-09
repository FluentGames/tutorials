
var ball ={
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

var wall = {
  x: 0,
  y: 0
}

var board = {
  width: 0,
  height: 0,
  walls: [
    {x1: 0, y1: 0, x2: 0, y2: this.height},
    {x1: 0, y1: 0, x2: this.width, y2: 0},
    {x1: this.width, y1: 0, x2: this.width, y2: this.height},
    {x1: 0, y1: this.height, x2: this.width, y2: this.height}
  ],
  init: function(width, heigh){
    this.width = width
    this.heigh = heigh
  },
  update: function(ctx){
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillText("Pong", this.width/2, this.height/2)
  }
}

var pong ={
  ball: ball,
  board: board,
  ctx: null,
  init: function (id, width, height){
    canvas = document.getElementById(id)
    ctx = canvas.getContext("2d")
    board.init(width, height)
  },
  update: function (){
    board.update(ctx)
    ball.update(ctx)
    setTimeout(this.update, 1000/30);
  }
}

pong.init('gameCanvas', 640, 360)
pong.update();
