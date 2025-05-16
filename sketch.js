let fcs = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) fcs.push(new Face(random(width), random(height)));
}

function draw() {
  background(230);
  for (let f of fcs) {
    f.move();
    f.show();
  }
}

function mousePressed() {
  for (let f of fcs) f.change();
}

class Face {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 80;
    this.vx = random(1, 3);
    this.vy = random(1, 3);
    this.col = color(random(255), random(255), random(255));
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  show() {
    fill(this.col);
    noStroke();
    ellipse(this.x, this.y, this.size);
    fill(0);
    ellipse(this.x - 15, this.y - 10, 10);
    ellipse(this.x + 15, this.y - 10, 10);
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(this.x, this.y + 10, 40, 20, 0, PI);
  }

  change() {
    this.col = color(random(255), random(255), random(255));
  }
}























