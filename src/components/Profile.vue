<script setup>
import {ref, reactive,computed,watch} from 'vue';
import { RouterLink } from 'vue-router';
import authStore from '../stores/authStore';
const auth = authStore();
const eligibilityStatus = ref('');
const profileData = reactive({
    fullName:auth.user.fullName,
    email:auth.user.email,
    phone:auth.user.phone,
    age:auth.user.age,
    image:auth.user.image,
    
/*birthLegal:computed(()=>{
        const today = new Date();
        const birthDate = new Date(today.getFullYear() - auth.user.age, today.getMonth(), today.getDate());
        let age = today.getFullYear() - birthDate.getFullYear();
        let msg;
       
        if (isNaN(age) || age <18) {
            msg = "Not Eligible for Voting";
        }
        else{
            msg="Eligible For Voting";
        }
        return msg
    
}),*/

});
let birthYear=computed(()=>{
        var today = new Date();
        var birthDate = new Date(today.getFullYear() - profileData.age, today.getMonth(), today.getDate());
       
        return birthDate.toISOString().slice(0, 4)
    
});

let birthLegal=computed(()=>{
        const today = new Date();
        const birthDate = new Date(today.getFullYear() - profileData.age, today.getMonth(), today.getDate());
        let age = today.getFullYear() - birthDate.getFullYear();
        let msg;
       
        if (isNaN(age) || age <18) {
           age=0;
        }
      
        return age
    
})

watch(birthLegal, (newAge, oldAge) => {
   
       
       if (isNaN(newAge) || newAge <18) {
        eligibilityStatus.value = "Not Eligible for Voting";
       }
       else{
        eligibilityStatus.value="Eligible For Voting";
       }
}, {immediate: true});

</script>
<template>
    <div class="bg-gray-100">
    <div class="container mx-auto py-8">
        <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
                <div class="bg-white shadow rounded-lg p-6">
                    <div class="flex flex-col items-center">
                        <img :src="profileData.image" class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"/>

                     
                        <h1 class="text-xl font-bold">{{ profileData.fullName }}</h1>
                        <p class="text-gray-600">Birth Year:{{ birthYear }}</p>
                        <div class="mt-6 flex flex-wrap gap-4 justify-center">
                            <a  href="#" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">{{ eligibilityStatus }}</a>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div class="col-span-4 sm:col-span-9">
                <div class="bg-white shadow rounded-lg p-6">
                

                    <h2 class="text-xl font-bold mt-6 mb-4">Profile</h2>
                    <div class="mb-6">
                        
                <form action="" class="flex flex-col gap-4">
                    <div>
                        <label for="name" class="text-indigo-500 inline-block pb-2">Full Name</label>
                        <input v-model="profileData.fullName"  class="w-full border-indigo-200 px-4 py-2 focus:outline-none" type="text" name="name" placeholder="Your Name">
                    </div>

                    <div>
                        <label class="text-indigo-500 inline-block pb-2" for="email">Email</label>
                        <input v-model="profileData.email" class="w-full border-indigo-200 px-4 py-2 focus:outline-none" type="email" name="email" placeholder="Your Email">
                    </div>
                    <div>
                        <label class="text-indigo-500 inline-block pb-2" for="phone">Phone</label>
                        <input v-model="profileData.phone" class="w-full border-indigo-200 px-4 py-2 focus:outline-none" type="number" name="phone" placeholder="Your Mobile">
                    </div>

                    <div>
                        <label class="text-indigo-500 inline-block pb-2" for="age">Age</label>
                        <input v-model="profileData.age" class="w-full border-indigo-200 px-4 py-2 focus:outline-none" type="number" name="age" placeholder="Your Age">
                    </div>
                    <div>
                        <label class="text-indigo-500 inline-block pb-2" for="image">Image</label>
     
             <input v-model="profileData.image" class="w-full border-indigo-200 px-4 py-2 focus:outline-none" type="text" name="image" placeholder="Your Image Link">

                    </div>

                    <div>
                        <input @click.prevent="auth.profile(profileData)" class="w-full bg-indigo-600 py-2 rounded-md text-white font-bold cursor-pointer" type="submit" value="Save">
                    </div>
                </form>
                    </div>
             
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style></style>