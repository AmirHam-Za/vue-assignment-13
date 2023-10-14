<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <router-view name="TopHeader"></router-view>

      <router-view name="LeftSideBar"></router-view>
            <router-view></router-view>
        
</template>

<style scoped>

</style>
