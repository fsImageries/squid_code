let CodeMirror = require("codemirror/lib/codemirror");
let js = require("codemirror/mode/javascript/javascript");
let js_hint = require("codemirror/addon/hint/javascript-hint")
let js_show = require("codemirror/addon/hint/show-hint")


let editor = CodeMirror.fromTextArea(document.getElementById("codeinput"),{
    lineNumbers: true,
    matchBrackets: true,
    gutter: true,
    lineWrapping: true,
    autoCloseTags: true,
    extraKeys: {"Ctrl-Space": "autocomplete"},
    // mode: {name: "javascript", globalVars: true},
    theme: "ambiance"
});

