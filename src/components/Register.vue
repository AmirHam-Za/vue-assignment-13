<script setup>
import {ref, reactive} from 'vue';
import { RouterLink } from 'vue-router';
import authStore from '../stores/authStore';
const auth = authStore();

const formData = reactive({});
</script>
<template>
    <div class="min-h-screen w-screen bg-indigo-200  flex items-center">
        <div class="max-w-4xl w-full mx-auto  bg-white flex flex-col md:flex-row gap-10 p-5 rounded-lg shadow-lg">
            
            <div class="w-full md:w-1/2 ">
                <h1 class="text-2xl font-bold text-indigo-600">Registration</h1>

                <form action="" class="flex flex-col gap-4">
                    <div>
                        <label for="name" class="text-indigo-500 inline-block pb-2">Full Name</label>
                        <input v-model="formData.fullName"  class="w-full border-indigo-200 px-4 py-2 focus:outline-none" type="text" name="name" placeholder="Your Name">
                    </div>

                    <div>
                        <label class="text-indigo-500 inline-block pb-2" for="email">Email</label>
                        <input v-model="formData.email" class="w-full border-indigo-200 px-4 py-2 focus:outline-none" type="email" name="email" placeholder="Your Email">
                    </div>
                    <div>
                        <label class="text-indigo-500 inline-block pb-2" for="password">Password</label>
                        <input v-model="formData.password" class="w-full border-indigo-200 px-4 py-2 focus:outline-none" type="password" name="password" placeholder="******">
                    </div>

                    <div>
                        <label class="text-indigo-500 inline-block pb-2" for="confirm-password">Confirm Password</label>
                        <input v-model="formData.confirm_password" class="w-full border-indigo-200 px-4 py-2 focus:outline-none" type="password" name="confirm-password" placeholder="******">
                    </div>

                    <div>
                        <input @click.prvent="auth.register(formData)" class="w-full bg-indigo-600 py-2 rounded-md text-white font-bold cursor-pointer" type="submit" value="Sign Up">
                    </div>
                </form>
                
                <p class="text-center pt-5 ">Already have an account ? <router-link to="/" class="text-indigo-500 font-bold">Sign in</router-link></p>
            </div>
        </div>
    </div>
</template>