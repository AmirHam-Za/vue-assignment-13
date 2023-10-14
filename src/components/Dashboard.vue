<script setup>
import Chart from './Chart.vue';
import AreaChart from './AreaChart.vue'
</script>
<template>
          <div class="p-4 sm:ml-64">
        <div class="p-4 border-2  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

    <div class="grid grid-cols-3 gap-4 mb-4">
        <div class="flex items-center justify-center h-24 rounded bg-indigo-300 dark:bg-gray-800">
            Total  Products
        </div>
        <div class="flex items-center justify-center h-24 rounded bg-blue-300 dark:bg-gray-800">
            Total Sales
        </div>
        <div class="flex items-center justify-center h-24 rounded bg-purple-300 dark:bg-gray-800">
            Total Expense
        </div>
    </div>
    <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <p class="text-2xl text-gray-400 dark:text-gray-500">
        </p>
    </div>
    <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <Chart></Chart>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <AreaChart></AreaChart>

        </div>
    </div>
    </div>
    </div>
    

</template>