<template>
   <div id="header">
      <nav class="navbar navbar-header container-fluid navbar-expand-sm">
              <a href="./Home"><img src="../img/header/logo-mona-watches-white.png" alt=""></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon nav-icon">
                  <i class="fa fa-bars"></i>
                </span>
              </button>
               <div class="collapse navbar-collapse" id="navbarNav">
                   <ul class="navbar-nav">
                     <li class="nav-item ">
                       <router-link class="nav-link" to="/Home">Giới Thiệu</router-link>
                     </li>
                     <li class="nav-item">
                       <router-link to="/donghoNam" class="nav-link">Đồng Hồ Nam</router-link>
                     </li>
                     <li class="nav-item">
                          <router-link to="/donghoNu" class="nav-link">Đồng Hồ Nữ</router-link>
                     </li>
                     <li class="nav-item">
                        <router-link to="/phuKien" class="nav-link">Phụ Kiện</router-link>
                     </li>
                      <li class="nav-item">
                          <router-link to="/TinTuc" class="nav-link">Tin Tức</router-link>
                     </li>
                      <li class="nav-item">
                            <router-link class="nav-link" to="./Login">Đăng Nhập</router-link>
                     </li>
                   </ul>
                   <form class="form-inline">
                     <div class="icon">
                        <i class="fa fa-search"></i>
                        <div class="nav-search">
                           <form class="form-inline-nav my-2 my-sm-3 navbar-search">
                              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                              <button class="btn btn-outline my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
                           </form>
                        </div>
                     </div>
                     <div class="icon">
                        <router-link to="/Login"><i class="fa fa-user"></i></router-link>
                     </div>
                     <div class="icon">    
                        <i @click="handleOpenModalCartList" class="fa fa-shopping-bag"></i>
                        <span class="bages bages-light">{{ sumAmountCart }}</span>
                     </div>
                   </form>
                 </div>
            </nav>
            <teleport to='#app'>
               <app-modal 
               :isOpen="isOpenModalCartList" 
               :handleCloseModal="handleCloseModalCartList" 
               >
               <section>
                  <cart-list 
                     :cartList="cartList" 
                     @handle-delete-cart="handleDelete" 
                     @handle-up-or-down-amount="handleUpOrDownAmount" />
               </section>
               </app-modal>
            </teleport>
         </div>
</template>

<script>
import CartList from '../page/CartList.vue'
import AppModal from '../products/AppModal.vue';

export default {
   name:'header-page',
   components: {
      AppModal,
      CartList,
   },
   props: {
      cartList: {
         type:Array
      } 
   },
    data() {
      return {
         cartList: [], //push dữ liệu vào data cartList
       },
      {
         isOpenModalCartList: false,
      }
   },
   computed: {
      sumAmountCart() {
         return this.cartList.reduce((sum, cart) => (sum += cart.amount),0);
      }
   },
   methods: {
      handleOpenModalCartList(){
         this.isOpenModalCartList = true;
      },
      handleCloseModalCartList() {
         this.isOpenModalCartList = false;
      },
      handleDelete(cart){
         this.$emit("handle-delete-cart", cart);
      },
      handleUpOrDownAmount(params) {
         this.$emit("handle-up-or-down-amount", params);
      },
   },
}
// window.onscroll = function () {
//    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//       document.getElementById("headerFixed").style.transform = "translate(0,0)";
//    } else {
//       document.getElementById("headerFixed").style.transform = "translate(0,-100%)";
//    }
// }
</script>

<style>
#header{
   box-sizing: border-box;
}
#navbarNav{
  margin-left: 40px;
}
.navbar{
   position: fixed;
   z-index: 999;
   background-color: black;
   padding: 0;
}
.navbar-nav {
   text-align: center;
   margin: 0 50px;
}
.nav-icon i{
   width: 100%;
   color: aliceblue;
   padding: 5px;
   border: none;
   border-radius:10px;
   text-align: center;
}
.navbar img {
   width: 170px;
   padding: 20px 0;
   margin-left: 170px;
   max-height: 120px;
}
.nav-item .nav-link{
   line-height: 1px;
   color: #fff;
   text-decoration: none;
   font-size:17px ;
   text-transform: uppercase;
   font-weight: bold;
   font-family: 'Roboto', sans-serif;
   transition: all .5s ease;
   margin: 0 2px;
}
.nav-item .nav-link:hover{
   color: orange;
}
.nav-item:not(:last-child){
   border-right:1px solid white ;
}
.icon:not(:last-child){
    border-right:1px solid white ;
}
.icon{
   position: relative;
}
.icon i {
   padding: 0 10px;
   line-height: 1px;
   color: #fff; ;
   font-size: 20px;
}
.icon i:hover{
   color: orange;
}
.fa-shopping-bag{
   cursor: pointer;
}
.bages{
   color: white;
}
@media screen and (max-width: 575.999px) {
   #header{
      box-sizing: border-box;
      padding: 50px 0;
   }
   .navbar-header{
      top: 0;
      position: fixed;
   }
   .navbar-header img {
      margin-left: 20px;
   }
   
   .nav-item .nav-link{
      font-size: 18px;
      line-height: 20px;
   }
   .form-inline{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
   }
   .navbar-search{
      display: flex;
      flex-flow: nowrap;
      width: 350px;
      position: absolute;
      left: 250px;
   }
}
.nav-search{
   position: absolute;
   top: 18px;
   left: -300px;
   display: none;
}
.navbar-search{
   border: 1px solid orange;
   padding: 25px;
   background-color: white;
}
.navbar-search button{
   border: 1px solid orange;
}
.navbar-search button i {
   color: black;
}
.navbar-search button i:hover{
   color: white;
}
.navbar-search button:hover{
   color: white;
   background-color:orange;
}
.icon:hover .nav-search{
  display: block;
}
</style>