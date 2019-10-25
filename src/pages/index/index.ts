import { createPage } from '@mpxjs/core'

createPage({
  onLoad () {
    console.log(__mpx_mode__)
  }
})
