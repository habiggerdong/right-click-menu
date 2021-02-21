<template>
  <div class="file_opera" @click="clickHandler">文件右键操作</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FileOpera",
  setup(props, context) {
    function clickHandler() {
      console.log("触发点击2");
      context.emit("selectItem", { name: "22" });
    }
    return {
      clickHandler,
    };
  },
});
</script>

<style lang="css" scoped>
.file_opera {
  background: #fff;
}
</style>