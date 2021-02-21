<template>
  <div @click="clickHandler">文件上传右键</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FileUploadGlobal",
  setup(props, context) {
    function clickHandler() {
      console.log("触发点击");
      context.emit("selectItem", { name: "22" });
    }
    return {
      clickHandler,
    };
  },
});
</script>

<style>
</style>