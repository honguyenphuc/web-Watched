import { createRouter , createWebHistory } from 'vue-router';
import Login from './Login.js';
import Home from './Home.js';
import donghoNam from './Product.js'
import donghoNu from './Product.js'
import phuKien from './Product.js'
import TinTuc from './TinTuc.js'

const routes = [ ...Login , ...Home , ...donghoNam , ...donghoNu , ...phuKien ,...TinTuc ]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router;