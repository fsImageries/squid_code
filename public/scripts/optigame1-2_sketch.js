let push = 0;
let anim = false;

const setAnim = (val) => (anim = val);

function setup() {
  const check = $(".codeinputContainer").height() >= 100
  let cnv = createCanvas(
    $(".codeinputContainer").width(),
    check ? $(".codeinputContainer").height() * 2 : 200
  );
  cnv.parent("sketchHolder");
}

function draw() {
  const tri = width / 3;
  const offset = tri / 2;
  const dispHeight = 100;
  const newDist = (tri * 3 - offset - width / 2) / 3;

  background($(":root").css("--CardBrown"));
  noFill();
  stroke(10);
  strokeWeight(10);

  circle(tri - offset + newDist, height / 2, dispHeight);

  triangle(
    tri * 2 - offset - dispHeight / 2,
    height / 2 + dispHeight / 2,
    tri * 2 - offset + dispHeight / 2,
    height / 2 + dispHeight / 2,
    tri * 2 - offset,
    height / 2 - dispHeight / 2
  );

  rectMode(CENTER);
  rect(tri * 3 - offset - newDist, height / 2, dispHeight);

  // Sliding doors
  strokeWeight(1);
  rectMode(CORNER);
  fill($(":root").css("--GuardRed"));
  rect(-width / 2 - push, 0, width, height);

  fill($(":root").css("--GuardRed"));
  rect(width / 2 + push, 0, width, height);

  // push = anim ? push + 2 : push;

  if (anim) push = push < width/2 ? push + 2: width/2
  else push = push > 0 ? push - 2 : 0
}

function windowResized() {
  resizeCanvas($(".codeinputContainer").width(), $(".codeinputContainer").height() * 2);
}
