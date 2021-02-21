# 文档

Vue的右键组件

## 使用方法

### 注册组件

```javascript
import {componentMange} from 'vue-right-click-menu'
componentMange.register('FileUploadGlobal', FileUploadGlobal)
componentMange.register('FileOpera', FileOpera)
```

### 使用

<div class="content" v-rightMenu.FileUploadGlobal="menuHandler">

menuHandler为注册的回调函数