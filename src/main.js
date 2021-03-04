import Vue from 'vue'
import App from './App.vue'
import {MdField, MdCheckbox, MdList, MdIcon, MdButton} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-dark.css'

Vue.use(MdField);
Vue.use(MdCheckbox);
Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdButton);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
