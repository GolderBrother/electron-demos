// src/main/ipcMain.js

// 主进程
const { ipcMain } = require("electron");
// 主进程处理渲染进程广播数据
ipcMain.on("sendAsyncMsg", function(event, data){
    console.log('data\n', data);
    console.log('event\n', event);
})
ipcMain.on("sendFeedback", function(event, data){
    console.log("收到了：data\n", data);
    // 主进程处理渲染进程广播数据，并反馈给渲染进程
    event.sender.send("sendFeedbackToRender", "来自主进程的反馈")
})

// 渲染进程和主进程同步通信 接收同步广播
ipcMain.on("sendSyncMsg", function(event, data){
    console.log("收到了渲染进程同步通信数据：\n", data);
    // 主进程给渲染进程广播数据
    event.returnValue = '渲染进程和主进程同步通信 接收同步广播，来自主进程的反馈.' 
})
