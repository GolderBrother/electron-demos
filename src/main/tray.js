// src/main/tray.js
/* eslint-disable */
/**
 * 系统托盘
 */
const {
    Menu,
    Tray,
    app,
    BrowserWindow
} = require('electron')

const path = require('path')
const win = BrowserWindow.getFocusedWindow()

const appIcon = new Tray(path.join(__dirname, '../static/img/lover.png'))
// Electron 实现任务栏闪烁图标
let count = 0,
    timer

// 监听任务栏图标的单击、双击事件
// 实现点击关闭按钮，让应用保存在托盘里面，双击托盘打开
win.on('close', (e) => {
    e.preventDefault()
    timer = null
    clearInterval(timer)
    win.hide()
})

appIcon.on('double-click', (e) => {
    win.show()
})


// Electron 点击右上角关闭按钮隐藏任务栏图标
win.on('close', (e) => {

    console.log(win.isFocused())

    if (!win.isFocused()) {
        win = null
    } else {
        e.preventDefault() /*阻止应用退出*/
        win.hide() /*隐藏当前窗口*/
    }
})

// Electron 创建任务栏图标以及任务栏图标右键菜单
const menu = Menu.buildFromTemplate([{
        label: '设置',
        click: function () {} //打开相应页面 
    },
    {
        label: '帮助',
        click: function () {}
    },
    {
        label: '关于',
        click: function () {}
    },
    {
        label: '退出',
        click: function () {
            // BrowserWindow.getFocusedWindow().webContents().send('close-main-window')
            app.quit()
        }
    }
])

timer = setInterval(function () {
        count++
        if (count % 2 == 0) {
            appIcon.setImage(path.join(__dirname, '../static/img/favicon.ico'))
        } else {
            appIcon.setImage(path.join(__dirname, '../static/img/lover.png'))
        }
    },
    500)

// 鼠标放上去提示信息
appIcon.setToolTip('hello james')
appIcon.setContextMenu(menu)