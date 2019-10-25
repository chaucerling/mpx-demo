import mpx from '@mpxjs/core'
import apiProxy from '@mpxjs/api-proxy'

mpx.use(apiProxy, { usePromise: true })

if (__mpx_mode__ === 'wx') {
  // do something
}

App({
  onLaunch (options) {
    console.log('onLaunch')
  }
})
