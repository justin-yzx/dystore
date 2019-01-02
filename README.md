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
  test:"123"
}
Vue.use(dystore,store)
```
- 数据仓库
``` javascript
let a = this.$store.state.data1
this.$store.state.test = '456'
```

- mapState
``` javascript
import { mapState } from 'dystore'

{
  ...,
  computed:{
    ...mapState({
      test:'state.data1'
    })
  },
  ...
}

赋值（可以直接赋值）
this.test='123'
取值
<div>{{ test }}</div> 

```

- event-bus
``` javascript
this.$store.$emit('testevent','123')

this.$store.$on('testevent',(res)=>{
    console.log(res)
})
```
- chrome调试工具（应用商店搜索dystore）

[点击下载](https://github.com/snake-developers/dystore-devtools)
