
import { start, remove } from './rightClick'
import { componentMange } from './componentMange'
import FileUploadGlobal from './rightMenu/FileUploadGlobal.vue'
import FileOpera from './rightMenu/FileOpera.vue'
componentMange.register('FileUploadGlobal', FileUploadGlobal)
componentMange.register('FileOpera', FileOpera)
const lifecyleV3 = {
  mounted (el, binding, vnode) {
    console.log('mounted-$el-binding', el, binding)
    const { modifiers, value: fn } = binding
    if (!modifiers || !(typeof fn === 'function')) {
      console.error('指令信息不全，正确格式 v-rightMenu.[componentName]="fnHandler"')
      return
    }
    const rightClick = start(el, { componentName: Object.keys(modifiers)[0], listen: fn })
    // fn('触发选中')
  },
  updated (el, binding) {
    console.log('updated-$el', el)
  },
  unmounted (el) {
    remove(el)
    console.log('unmounted-$el', el)
  }
}
export {lifecyleV3 }