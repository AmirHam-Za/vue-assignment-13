<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Master from './components/Master.vue';

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <Master></Master>
        
</template>

<style scoped>

</style>
