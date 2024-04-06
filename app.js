// const os = require('node:os'); 

const osName = document.getElementById('osName')
const osLogo = document.getElementById('osLogo')
const totalMem = document.getElementById('totalMem')
const freeMem = document.getElementById('freeMem')
const usedMem = document.getElementById('usedMem')

// const pcMem = os.totalmem()

// totalMem.textContent = pcMem.toString()

totalMem.textContent = navigator.appName

if (navigator.platform.toLowerCase().includes("win32")) {
    osName.textContent = 'Windows 10'
    osLogo.src = 'assets/img/win10.png'
}

if (navigator.platform.toLowerCase().includes("win64")) {
    osName.textContent = 'Windows 11'
    osLogo.src = 'assets/img/win11.png'
}
