import { createRouter, createWebHistory } from "vue-router";
import store from "../stores/authStore";
import LoginComponent from '../components/Login.vue';
import RegisterComponent from '../components/Register.vue';
import DashboardComponent from '../components/Dashboard.vue';
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import ProductView from '../views/Products.vue';
import DetailsComponent from '../components/Details.vue';
import ProfileView from '../views/ProfileView.vue';


const routes = [
    {
        path : '/',
        name : 'Login',
        component : LoginComponent,

    },

   

    {
        path : '/register',
        name : 'Register',
        component : RegisterComponent
    },
    {
      path : '/dashboard',
      name : 'Dashboard',
      components : {
        default:DashboardComponent,
      LeftSideBar: Sidebar,
      TopHeader: Header,
      },

      meta : {
          isAuthenticated : true
      }
  },

    {
        path : '/products',
        name : 'Products',
        components :{
          default: ProductView,
        LeftSideBar: Sidebar,
        TopHeader: Header,
        },

        meta : {
            isAuthenticated : true
        }
    },
    {
        path : '/product-details/:id',
        name : 'Details',
        components : {
          default:DetailsComponent,
        LeftSideBar: Sidebar,
        TopHeader: Header,
        },

        meta : {
            isAuthenticated : true
        }
    },
    {
        path : '/profile',
        name : 'Profile',
        components :{
          default: ProfileView,
        LeftSideBar: Sidebar,
        TopHeader: Header,
        },

        meta : {
            isAuthenticated : true
        }
    },
]


const router = createRouter({
   history : createWebHistory(),
   routes
});


router.beforeEach((to,from,next)=>{
    const state = store()
    if(to.meta.isAuthenticated == true && !state.isAuthenticated){
        next('/login')
    }else{
        next()
    }
})


export default router;