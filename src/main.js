import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "lib-flexible/flexible"
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import "https://fonts.googleapis.com/css?family=Lato&display=swap";

Vue.use(ElementUI);
Vue.use(Vant);
//挂载在Vue的原型上
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')