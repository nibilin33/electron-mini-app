<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  window.app.changeThemeColor('')
})
</script>

<template>
  <div class="about">
    详情页
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
}

.qrcode {
  height: 120px;
  width: 120px;
  margin-bottom: 10px;
}

.link {
  margin-top: 40px;
}

.link-item {
  margin: 0 8px;
}
</style>
