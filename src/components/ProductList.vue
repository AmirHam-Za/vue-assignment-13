<script setup>
import 'vue3-easy-data-table/dist/style.css';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import {onMounted, ref} from "vue";

const headers = [
  { text: "Title", value: "title" },
  { text: "Unit Price", value: "price"},
  { text: "Number of Items", value: "stock", sortable: true},
  { text: "Action", value: "operations"},

];

const items = ref([]);

onMounted(async () => {
  const resJson = await fetch('https://dummyjson.com/products?limit=10').then(resText => {
    return resText.json();
  })
  items.value = resJson.products;
  console.log(items.value)
})


const loading = ref(false)
</script>



<template>
  <Vue3EasyDataTable
      show-index
      :loading="loading"
      :headers="headers"
      :items="items">
      <template #item-operations="items">
     <RouterLink :to="{ name: 'Details', params: { id: items.id } }"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"/>
    </g>
  </svg></RouterLink>
     </template>
      </Vue3EasyDataTable>
</template>