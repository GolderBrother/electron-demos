/* eslint-disable */
// const { ipcRenderer } = require("electron");
const myWebview = document.querySelector("#webview");

// 渲染进程接收主进程发来的消息
ipcRenderer.on("openwebview", (e, url) => {
    myWebview.src = url;
})