const { ipcMain, BrowserWindow } = require("electron")
const path = require("path")

let win
ipcMain.on("openWindow", function(event, userInfo){
    // 获取当前窗口ID 放在第一行保险  因为后面也打开了新窗口使得获取的ID有问题
    let winId = BrowserWindow.getFocusedWindow().id
    console.log("主进程收到的消息 \n", userInfo)
    // 调用window打开新窗口
    win = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences: {
            // 解决electron渲染进程报错：require is not defined
            nodeIntegration: true, // 是否集成 Nodejs,把之前预加载的js去了，发现也可以运行
        }
    })

    win.loadURL(path.join(__dirname, "../new.html"))

    win.webContents.openDevTools()

    // 把渲染进程传递过来的数据再次传递给渲染进程news
    // 等待窗口加载完
    win.on("did-finish-load", ()=> {
        win.webContents.send("toNews", userInfo, winId)
    })

    win.on("close", () => {
        win = null
    })
})