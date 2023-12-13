<template>
  <n-message-provider>
    <n-dialog-provider to="body">
      <appLayout>
        <router-view />
      </appLayout>
    </n-dialog-provider>
  </n-message-provider>
</template>

<script setup>
import appLayout from '@/layout/index.vue';
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
:root {
  --primary-color: #18a058;
}
</style>
