// 在主进程src/index.js中引入
const {
    app,
    BrowserWindow
} = require("electron");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

const createWindow = () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            // 解决electron渲染进程报错：require is not defined
            nodeIntegration: true, // 是否集成 Nodejs,把之前预加载的js去了，发现也可以运行
        }
    });
    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // 打开开发工具页面
    mainWindow.webContents.openDevTools();

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    // 当窗口关闭时调用的方法
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })

    // 创建菜单  
    // 引入菜单模块
    require("./main/menu.js")
    require("./main/ipcMain.js")
    require("./main/ipcMain2.js")

    require("./main/tray.js")
    
}

// 注意在外部引入
require('./main/shortCut.js')

// Some APIs can only be used after this event occurs.
// 当 Electron 完成初始化并且已经创建了浏览器窗口，则该方法将会被调用。
// 有些 API 只能在该事件发生后才能被使用
app.on('ready', createWindow)

// Quit when all windows are closed.
// 当所有的窗口被关闭后退出应用 
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

