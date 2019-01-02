let installFlag = false
let state={}
let VueBak
const install = function (Vue, options) {
  if (installFlag) {
    return
  }
  installFlag = true
  state=options
  VueBak=Vue
  Vue.prototype.$store = new Vue({
    data: {
      state: options,
      devtool: false,
    },
    created() {
      try {
        window.postMessage({
          type: 'dystore-init'
        })
        window.addEventListener('message', event => {
          if(event.data.type == 'dystore-finish'){
            this.devtool = true
            this.sendMsg()
          }
        })
      } catch (e) {
        e
      }
    },
    watch: {
      state: {
        deep: true,
        handler() {
          this.sendMsg()
        }
      }
    },
    methods: {
      sendMsg() {
        if (this.devtool) {
          window.postMessage({
              type: 'store-change', msg: JSON.stringify(this.state, (k, v) => {
                if(typeof v === 'undefined')
                {
                  return 'undefined'
                }
                else
                {
                  return v
                }
              })
            },
            '*'
          )
        }
      }
    }
  })
}

const mapState = (mapObj) => {
  let keys = Object.keys(mapObj)
  let res = {}
  for(let i=0;i<keys.length;i++){
    res[keys[i]]={
      set(value){
        let key=mapObj[keys[i]].split('.');
        let res=state;
        let num=1
        while (num!=key.length-1){
          res=res[key[num]]
          num++
        }
        VueBak.set(res,key[key.length-1],value)
      },
      get(){
        return eval(mapObj[keys[i]])
      }
    }
  }
  return res
}

export default { install ,mapState }

