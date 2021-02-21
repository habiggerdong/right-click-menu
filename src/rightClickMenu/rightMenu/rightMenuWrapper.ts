import { defineComponent, h } from 'vue'
import  componentMange  from '../componentMange'
export default defineComponent({
  props: {
    componentName: {
      type: String,
      required: true
    },
    postionX: {
      type: Number,
      required: true
    },
    postionY: {
      type: Number,
      required: true
    },
    listen: {
      type: Function,
      required: true
    }
  },
  setup (props) {
    function selectItem (data) {
      console.log('props.listen', props.listen)
      props.listen && props.listen(data)
    }
    return () => {
      return h('div', {
        style: {
          position: 'fixed',
          left: `${props.postionX}px`,
          top: `${props.postionY}px`,
          width: `100px`,
          height: `200px`,
          zIndex: 9999
          // backgroundColor: '#000000'
        }
      }, [h(componentMange.getComponent(props.componentName), {
        onSelectItem: selectItem
      })])
    }
  }
})