
import { App } from 'vue'
import { lifecyleV3 } from './lifecyle'
type rightClickMenu = {
  installed: boolean,
  install: (app: App) => void
}
const rightClickMenu: rightClickMenu = {
  installed: false, install: function (app: App) {
    if (rightClickMenu.installed) {
      return
    }
    app.directive('rightMenu', lifecyleV3)
    rightClickMenu.installed = true
  }
}

export default rightClickMenu