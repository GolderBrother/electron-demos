const {
    remote
} = require("electron");
const showError = document.querySelector("#showError");
showError.addEventListener("click", function () {
    remote.dialog.showErrorBox("警告", "操作有误");
})

const showMessageBox = document.querySelector("#showMessageBox");
showMessageBox.addEventListener("click", function () {
    remote.dialog.showMessageBox({
        type: "info",
        title: "提示信息",
        message: "这是内容",
        buttons: ['确定', '取消']
    });
}, function (index) {
    console.log(index);
});

// 打开文件夹或文件
const showOpenDialog = document.querySelector("#showOpenDialog");
showOpenDialog.addEventListener("click", function () {
    remote.dialog.showOpenDialog({
        properties: ["openDirectory", "openFile"]
    }, function (data) {
        console.log(data);
    });
});

// 保存文件
const showSaveDialog = document.querySelector("#showSaveDialog");
showSaveDialog.addEventListener("click", function () {
    remote.dialog.showSaveDialog({
        title: "Save File",
        defaultPath: "/Users/Administrator/Downloads",
        // filters 指定一个文件类型数组，用于规定用户可见或可选的特定类型范围
        filters: [{
                name: 'Image',
                extensions: ['jpg', 'png', 'gif']
            },
            {
                name: 'Movies',
                extensions: ['mkv', 'avi', 'mp4']
            },
            {
                name: 'Custom File Type',
                extensions: ['as']
            },
            {
                name: 'All Files',
                extensions: ['*']
            }
        ]
    }, function(path){
        // 不是真的保存 ，具体还需nodejs处理
        console.log(path)
    });
});