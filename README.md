# dystore

> vue数据仓库

## 安装
```shell
npm install dystore --save
```

## 快速开始
- 安装
``` javascript
import dystore from 'dystore'
let store = {
  data1:"123"
}
Vue.use(dyview,store)
```
- 数据仓库
``` javascript
let a = this.$store.state.data1
this.$store.state.data1 = '456'
```
- event-bus
``` javascript
this.$store.$emit('testevent','123')

this.$store.$on('testevent',(res)=>{
    console.log(res)
})
```
- chrome调试工具（目前没有上传到应用商店）

[点击下载](https://github.com/snake-developers/dystore-devtools)
