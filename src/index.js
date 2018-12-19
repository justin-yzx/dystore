let installFlag = false
const install = function (Vue, options) {
  if (installFlag) {
    return
  }
  installFlag = true
  Vue.prototype.$store = new Vue({
    data: {
      state: options,
      devtool: false,
    },
    created() {
      window.postMessage({
        type: 'dystore-init'
      })
      window.addEventListener('message', event => {
        if (event.data.type == 'dystore-finish') {
          this.devtool = true
          this.sendMsg()
        }
      })

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
              if (typeof v === 'undefined') {
                return 'undefined'
              } else {
                return v
              }
            })
          }, '*')
        }
      }
    }
  })
}

export default {install}
