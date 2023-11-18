import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fortawesome-svg-core';
import {faBank, faBuilding, faPencil, faPhone, faPlus, faTag, faTrash, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

library.add(faPhone);
library.add(faUser);
library.add(faTrash);
library.add(faPencil);
library.add(faTag);
library.add(faBuilding);
library.add(faBank);
library.add(faPlus);

createApp(App).use(router).mount('#app')
