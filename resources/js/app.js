/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import VueRouter from 'vue-router';
import HeaderComponent from "./components/HeaderComponent";
import CalendarComponent from "./components/CalendarComponent";
import RegisterComponent from "./components/RegisterComponent";
import FooterComponent from "./components/FooterComponent";

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('register-component', RegisterComponent);
Vue.component('header-component', HeaderComponent);
Vue.component('calendar-component', CalendarComponent);
Vue.component('footer-component', FooterComponent);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/register',
            name: 'workout.register',
            component: RegisterComponent
        },
        {
            path: '/calendar',
            name: 'workout.calendar',
            component: CalendarComponent
        },
    ]
});

const app = new Vue({
    el: '#app',
    router
});
