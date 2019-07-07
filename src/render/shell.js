// shell模块<webview>结合Menu模块使用案例
const { shell } = require("electron");
let sheelDom = document.querySelector("#sheelDom");

sheelDom.onclick = function(e){
    shell.openExternal("https://github.com/GolderBrother");
}