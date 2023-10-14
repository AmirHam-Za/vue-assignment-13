<script setup>
import {ref} from 'vue';
import { RouterLink } from 'vue-router';
import authStore from '../stores/authStore';

const auth = authStore();


const email = ref("admin@test.com");
const password = ref("123456");

</script>

<template>    
    <div class="bg-indigo-200 h-screen w-screen flex items-center">
        <div class="h-max mx-auto flex flex-col items-center">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Admin Panel</span> </h1>
            <div class="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
                  <div>
                    <label class="text-indigo-600 font-bold inline-block pb-2" for="email">Email</label>
                    <input v-model="email"  class="border border-indigo-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="Your Email">
                </div>
                <div>
                    <label class="text-indigo-600 font-bold inline-block pb-2" for="password">Password</label>
                    <input v-model="password" class="border border-indigo-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******">
                </div>
                <div>
                    <input @click="auth.login(email,password)"  class="bg-indigo-600 w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-indigo-800" type="submit" value="Login" >
                </div>
                <div>
                    <p class="text-center">
                        Don't have an account?<router-link to="/register" class="text-indigo-500 font-bold" >Register now</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>