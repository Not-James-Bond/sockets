let socket;
const address = process.env.SERVER_ADDRESS;

function setup() {
  createCanvas(800, 550);
  background(51);

  socket = io.connect(`http://localhost:8001`);
  socket.on('mouseCordinates', data => {
    noStroke();
    fill(255, 0, 100);
    ellipse(data.X, data.Y, 10, 10);
  });
}

function mouseDragged() {
  console.log(`Sending Mouse Corrdinates ${mouseX}, ${mouseY}`);
  const data = {
    X: mouseX,
    Y: mouseY,
  };
  socket.emit('mouseCordinates', data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 10, 10);
}

function draw() {}
