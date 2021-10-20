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
  background(127);
  fill(0);
  rect(-width / 2 - push, 0, width, height);

  fill(255);
  rect(width / 2 + push, 0, width, height);

  push = anim ? push + 1 : push;
  // some++;
}

const isValid = (val) => {
  console.log(val);
};
