import { Component, DefineComponent } from "vue"
import { App } from 'vue'
class ComponentMange {
  constructor() {
    this.componentMap = new Map()
  }
  componentMap: Map<string, DefineComponent>
  register(name: string, component: DefineComponent) {
    this.componentMap.set(name, component)
  }
  unRegister(name: string) {
    this.componentMap.delete(name)
  }
  getComponent(name: string): DefineComponent {
    return this.componentMap.get(name)
  }

  getComponents(): IterableIterator<[string, DefineComponent]> {
    let kv = this.componentMap.entries()
    return kv
  }

}

const componentMange = new ComponentMange()

export default {
  install(app: App) {
    app.config.globalProperties.$componentMange = componentMange
  }
}
export {
  componentMange
}