<script setup>
import {ref,reactive,onBeforeMount} from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios'

const route = useRoute()
const id = route.params.id
const product = reactive({})

onBeforeMount(() => {
   
    axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => {
            product.id = res.data.id
            product.title = res.data.title
            product.description = res.data.description
            product.price = res.data.price
            product.rating = res.data.rating
            product.stock = res.data.stock
            product.brand = res.data.brand
            product.category = res.data.category
            product.thumbnail = res.data.thumbnail



        })

   
})
</script>

<template>  
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">


<div class="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" :src="product.thumbnail" alt="product image" />
    </a>
    <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>
        <div class="flex items-center mt-2.5 mb-5">
          
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{ product.stock }} In Stock</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
        </div>
        <p>{{ product.description }}</p>
    </div>
</div>
</div>
</div>

   
</template>
<style></style>