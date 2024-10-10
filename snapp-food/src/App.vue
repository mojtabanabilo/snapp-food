<template>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">


</script>

<style>
.main {
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
}
</style>
