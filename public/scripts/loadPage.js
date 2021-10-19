const param = window.location.search.replaceAll("?", "");
if (param.includes("page")) {
  const idx = param.indexOf("=") + 1;
  const page = param.slice(idx, param.length);
  $(".content").load(`${page}.html`);
}
