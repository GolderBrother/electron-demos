// src/render/ipcRender.js
// 渲染进程
const send = document.querySelector("#send")
const sendFeedback = document.querySelector("#sendFeedback")
const sendSync = document.querySelector("#sendSync");

const {
    ipcRenderer
} = require("electron")
send.addEventListener("click", function () {
    console.log("click");
    // 传递消息给主进程
    // 异步
    ipcRenderer.send('sendAsyncMsg', {
        name: "james",
        age: 24
    })
})

sendFeedback.addEventListener("click", function () {
    ipcRenderer.send("sendFeedback", {
        name: "james",
        age: 24
    })
    ipcRenderer.on("sendFeedbackToRender", function (event, data) {
        console.log('event\n ', event)
        console.log('收到主进程发过来的数据:data\n ', data)
    })
})

sendSync.addEventListener("click", function(){
    let msg = ipcRenderer.send("sendSyncMsg", {
        name: "james",
        age: 24
    })
    // 同步返回主进程反馈的数据
   console.log('msg\n ', msg)
})

openWindow