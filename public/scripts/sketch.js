// TODO find alternative to 'DOMSubtreeModified'
$(document).on("DOMSubtreeModified", () => {
  const height = $(document).height();
  $(":root").css("--bgHeight", `${height}px`);
});

let push = 0;
let anim = false;

const setAnim = (val) => (anim = val);

function setup() {
  let cnv = createCanvas(
    $(".codeinputContainer").width(),
    $(".codeinputContainer").height() * 2
  );
  cnv.parent("sketchHolder");
}

function draw() {
  const tri = width / 3;
  const offset = tri / 2;
  const dispHeight = 100;
  const newDist = (tri * 3 - offset - width/2) / 2

  background($(":root").css("--CardBrown"));
  noFill();
  stroke(10);
  strokeWeight(10);

  circle((tri - offset) + newDist, height / 2, dispHeight);

  triangle(
    tri * 2 - offset - dispHeight / 2,
    height / 2 + dispHeight / 2,
    tri * 2 - offset + dispHeight / 2,
    height / 2 + dispHeight / 2,
    tri * 2 - offset,
    height / 2 - dispHeight / 2
  );

  rectMode(CENTER);
  rect((tri * 3 - offset) - newDist, height / 2, dispHeight);

  rectMode(CORNER);
  // background(127);
  fill($(":root").css("--GuardRed"));
  rect(-width / 2 - push, 0, width, height);

  fill($(":root").css("--GuardRed"));
  rect(width / 2 + push, 0, width, height);

  push = anim ? push + 2 : push;
  // some++;
}

const isValid = (val) => {
  console.log(val);
};
