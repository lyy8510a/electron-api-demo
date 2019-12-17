var exec = require('child_process').exec
const os = require('os')
var cmdStr = '';
/*
获取被占有端口
//macOs
netstat -AaLlnW|awk  'NR>2{print $4}'|awk -F "." '{print $NF}'|xargs
//linux
netstat -tlunp|awk 'NR>2{print $4}'|awk -F ':' '{print $NF}'|xargs
*/

const sysCMDBtn = document.getElementById('sys-cmd')

sysCMDBtn.addEventListener('click', () => {
  // 判断操作系统类型
  // 在 Linux 上返回 'Linux'，在 macOS 上返回 'Darwin'，在 Windows 上返回 'Windows_NT'
  if (os.type() === 'Darwin'){
     cmdStr = 'netstat -AaLlnW|awk  \'NR>2{print $4}\'|awk -F "." \'{print $NF}\'|xargs'
  }else if(os.type() === 'Linux'){
     cmdStr = 'netstat -tlunp|awk \'NR>2{print $4}\'|awk -F \':\' \'{print $NF}\'|xargs'
  }else{
    cmdStr = ''
  }


  exec(cmdStr, function (err, stdout, stderr) {
    if (err) {
      console.log(stderr)
    } else {
      var message = `被占有的端口有:${stdout}`
      console.log(stdout)
      document.getElementById('got-sys-cmd').innerHTML = message
    }
  })

})
