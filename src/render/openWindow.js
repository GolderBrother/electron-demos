// 渲染进程和渲染进程直接的通信========

const openWindow = document.querySelector("#openWindow")
// const { ipcRenderer } = require("electron")

// 数据经过渲染进程->主进程->news渲染进程
openWindow.addEventListener("click", function(){
    // 传递消息给主进程
    ipcRenderer.send("openWindow", {name: "jameshhhh", age: 24})

    // 传递给打开的窗口 渲染进程和渲染进程直接的通信
    localStorage.setItem("username", "james")

})

// 接收news渲染进程传递回来的消息
ipcRenderer.on("toIndex", function(event, data){
    console.log("news渲染进程传递回来的消息: \n", data)
})