import {ref, reactive} from 'vue';
import router from '../router/index';
import {defineStore} from 'pinia';



const authStore = defineStore('auth', () => {
    const isAuthenticated = ref(localStorage.getItem('isAuthenticated'));
    let user = ref({
        fullName:'Amir Hamza',
        email:'hamza.com.bd@gmail.com',
        age:'28',
        phone:'019785159459',
        password:'123456',
        image:'https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg'
        
    });
    

    const login = (email, password) => {
        if(email == "admin@test.com" && password == "123456"){
            localStorage.setItem('isAuthenticated',true);
            isAuthenticated.value = true;
           // todoStore().action.fetch();
            router.push('/dashboard');
        }
        if(JSON.parse(localStorage.getItem('user')) != null)
            user.value = JSON.parse(localStorage.getItem('user'));

        if(user.value.email == email && user.value.password == password){
            localStorage.setItem('isAuthenticated',true);
            isAuthenticated.value = true;
           // todoStore().action.fetch();
            router.push('/dashboard');
        }
        else{
            console.log('Username or Password is incorrect');
        }

    };

    const register = (formData) => {
        if(localStorage.setItem('user', JSON.stringify(formData))){
            localStorage.setItem('isAuthenticated',true);
            isAuthenticated.value = true;
            //todoStore().action.fetch();
            return formData;
        }

        router.push('/');

    };

    const profile = (profileData) => {
        localStorage.setItem('user', JSON.stringify(profileData));
        user.value=profileData;
      
        router.push('/profile');
       
    };

    const logout = () => {
        localStorage.setItem('isAuthenticated',false);
        isAuthenticated.value = false;
        localStorage.setItem('user', null);
        user.value = null;
        router.push('/');
    };

    return {isAuthenticated,user,profile, register, login, logout};
});

export default authStore;