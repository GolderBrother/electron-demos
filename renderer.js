// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs = require('fs');
// import fs from "fs";
const code = document.getElementById("code");
const btn = document.getElementById('btn');
btn.addEventListener("click", function(e) {
    fs.readFile('package.json', (err, data) => {
        if(err) return console.error(err);
        code.textContent = data;
    })
})
