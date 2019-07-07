// let username = localStorage.getItem("username");
// console.log(username);

const { ipcRenderer } = require("electron");

// 注意这里 在渲染进程中需要从remote中获取BrowserWindow
const BrowerWindow = require('electron').remote.BrowserWindow;

ipcRenderer.on("toNews", (event, userInfo, winId) => {
    console.log("接收到主线程发过来的数据: \n", userInfo);
    console.log("winId: \n", winId);
    let firstWin = BrowerWindow.fromId(winId);
    firstWin.webContents.send("toIndex", "来自news进程反馈的信息");
})