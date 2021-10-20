// TODO find alternative to 'DOMSubtreeModified'
$(document).on("DOMSubtreeModified", () => {
  const height = $(document).height();
  $(":root").css("--bgHeight", `${height}px`);
});

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("sketchHolder");
}

let some = 0;
function draw() {
  background(127);
  fill(0);
  rect(0 - some, 0, height / 2, width);

  fill(255);
  rect(width / 2 + some, 0, height / 2, width);

  some++;
}
