const os = require('os')
const homeDir = os.homedir()
const arch = os.arch()
const cpus = os.cpus()
const freemem = os.freemem()
const selfhostname = os.hostname()
const networkInterfaces = os.networkInterfaces()

const sysInfoBtn = document.getElementById('sys-info')

sysInfoBtn.addEventListener('click', () => {
  const message = `Your system home directory is: ${homeDir} 型号:${arch}  可用内存：${freemem} 主机名：${selfhostname} `
  document.getElementById('got-sys-info').innerHTML = message + JSON.stringify(networkInterfaces) + JSON.stringify(cpus)
})
