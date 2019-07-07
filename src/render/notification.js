// h5api实现通知
const path = require("path");
// 断开网络 再次连接测试
// 监听网络变化实现消息通知

const options = {
    title: "electron 通知API",
    body: "hello james",
    icon: path.join(__dirname, './static/img/favicon.ico') // 通知图标
}

document.querySelector("#notification").onclick = function(){
    console.log("notification");
    let myNotification = new window.Notification(options.title, options)
    myNotification.onclick = function () {
        console.log('click notification')
    }
}

// 网络连接状态
window.addEventListener("online", function(){
    console.log("online");
})

// 网络断开状态
window.addEventListener("offline", function(){
    const option = {
        title: "QQ邮箱",
        body: "网络异常,请检查你的网络",
        icon: path.join(__dirname, './static/img/favicon.ico') // 通知图标
    }
    let myNotification = new window.Notification(option.title, option);
    myNotification.onclick = function(){
        console.log("click notification")
    }
})
