/* eslint-disable */
// clipboard可以在主进程或渲染进程使用

const {
    clipboard,
    nativeImage
} = require("electron");
// const path = require("path");

//复制
// 运行ctrl+v可看到复制的内容
// clipboard.writeText('poetries')

// clipboard.readText() //获取复制的内容 粘贴

const msg = document.querySelector("#msg"),
    plat = document.querySelector("#plat"),
    text = document.querySelector("#text");

msg.ondblclick = function () {
    clipboard.writeText(plat.innerText);
    alert("复制成功");
}

plat.onclick = function () {
    text.value = clipboard.readText();
}

// 复制图片显示到界面
const copyImg = document.querySelector("#copyImg");

copyImg.onclick = function(){
     // 结合nativeImage模块
    const image = nativeImage.createFromPath(path.join(__dirname, "./static/img/lover.png"));
    console.log(image, __dirname);
    // 写入到剪切板中
    clipboard.writeImage(image);

    // 从剪切板中读取并转换为base64
    let imgSrc = clipboard.readImage().toDataURL(); // base64图片
    console.log(imgSrc);
    // 创建个图片元素，并将base值赋值给图片元素的src属性
    let imgDom = new Image();
    imgDom.src = imgSrc;

    // 最后插入到文档中,显示到页面上
    document.body.appendChild(imgDom);
}