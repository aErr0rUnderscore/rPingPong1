function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  //walls = new Group()
  /*var wall1 = (0, 200, 10, 400)
  var wall2 = (400, 0, 800, 10)
  var wall3 = (400, 400, 800, 10)
  var wall4 = (800, 400, 10, 400)*/

  wall1 = new Walls(0, 200, 10, 400, "black")
  wall2 = new Walls(400, 0, 800, 10, "black")
  wall3 = new Walls(400, 400, 800, 10, "black")
  wall4 = new Walls(800, 200, 10, 400, "black")
  divider1 = new Walls(397, 200, 5, 400, "blue")
  divider2 = new Walls(403, 200, 5, 400, "red")
}

function draw() {
  background(215,185,234);

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  divider1.display();
  divider2.display();
  drawSprites();
}