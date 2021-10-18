let CodeMirror = require("codemirror/lib/codemirror");
let js = require("codemirror/mode/javascript/javascript");
let js_hint = require("codemirror/addon/hint/javascript-hint")
let js_show = require("codemirror/addon/hint/show-hint")

// var myCodeMirror = CodeMirror(document.body, {
//     value: "function myScript(){return 100;}\n",
//     mode:  "javascript"
//   });

var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("codeinput"),{
    lineNumbers: true,
    gutter: true,
    lineWrapping: true,
    autoCloseTags: true,
    extraKeys: {"Ctrl-Space": "autocomplete"},
    mode: {name: "javascript", globalVars: true}
});
