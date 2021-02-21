
import { App, createApp, ref,Ref } from 'vue'
import RightMenuWrapper from './rightMenu/rightMenuWrapper'
type config={
  componentName: string, listen: {(e:MouseEvent):void} 
}
class RightClick {
  constructor(el:HTMLElement, config:config) {
    this.$el = el
    this.$config = config
    this.listen = null
    this.$el && this.$el.addEventListener('contextmenu', this.run.bind(this), false)
    this.$el && this.$el.addEventListener('click', this.hide.bind(this), false)
    this.postionX = ref(0)
    this.postionY = ref(0)
    this.$mountel = null
    this.app = null
  }
  $el:HTMLElement
  $config:config
  $mountel:HTMLElement
  postionX:Ref<number>
  postionY:Ref<number>
  app:App
  listen: {(e:MouseEvent):void}
  add (cb) {
    this.listen = cb
  }
  run (e:MouseEvent) {
    const { clientX, clientY } = e
    this.$mountel && this.app && this.app.unmount(this.$mountel)
    if (!this.$mountel) {
      this.$mountel = document.createElement('div')
      document.body.appendChild(this.$mountel)
    }
    this.app = createApp(RightMenuWrapper, { postionX: clientX, postionY: clientY, componentName: this.$config.componentName, listen: this.$config.listen })

    this.app.mount(this.$mountel)
    this.listen && this.listen(e)
    e.preventDefault()
    e.stopPropagation();
  }
  hide (e) {
    this.$mountel && this.app && this.app.unmount(this.$mountel)
    e.stopPropagation();
  }
  unmounted () {
    this.$el.removeEventListener('contextmenu', this.run, false)
  }
}

let weakMap = new WeakMap<HTMLElement,RightClick>();

function start (el:HTMLElement, config:config) {
  console.log('传入配置', config)
  let rightClick = new RightClick(el, config)
  weakMap.set(el, rightClick)
  return rightClick
}

function remove (el:HTMLElement) {
  let rightClick = weakMap.get(el);
  rightClick instanceof RightClick && rightClick.unmounted()
  weakMap.delete(el)
}

export default RightClick
export {
  start, remove
}