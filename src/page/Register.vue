<template>
    <div class="login-page">
      <div class=" register-main">
        <div class="container-register">
            <div class="register-form">
                <div class="box register">
                    <h2>Register</h2>
                    <form action="#">
                            <div class="form-group">
                                <label for="email">Đia Chỉ Email:</label>
                                <input type="email" class="form-control" placeholder="Enter email" id="email">
                            </div>
                            <div class="form-group">
                                <label for="pwd">Mật Khẩu:</label>
                                <input type="password" class="form-control" placeholder="Enter password" id="pwd">
                            </div>
                            <div class="form-group">
                                <label for="pwd">Xác Nhận Mật Khẩu:</label>
                                <input type="password" class="form-control" placeholder="Enter password" id="pwd">
                            </div>
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                <input class="form-check-input" type="checkbox"> Lưu Tài Khoản
                                </label>
                            </div>
                           <router-link to="/Login" class="btn submitRegister"> Xác Nhận</router-link>     
                    </form> 
                </div>
            </div> 
            <div class="FormBox-1"></div>
        </div>
    </div>
        <Footer />
    </div>
</template>

<script>
// import Header from '../layout/Header.vue'
// import Home from '../page/Home.vue'
import Footer from '../layout/Footer.vue'

export default {
    name : "login-page",
    components:
    {
        // Header,
        Footer
    },
}

</script>

<style>
.register-main{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff ;
}
.container-register{
    position: relative;
    width: 800px;
    height: 530px;
    margin: 20px;
    margin-top: 130px;
}
.register-form{
    position: absolute;
    top: 40px;
    width: 100%;
    height: 450px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 45px rgba(0,0,0, 0.3); 
    display: flex;
    justify-content: left;
    align-items: center;
}
.register-form .box{
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
}
.register-form .box h2 {
    color: orange;
    font-size: 40px;
    font-weight: 500;
}
.FormBox-1{
    position:absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgb(207, 139, 12);
    z-index: 2;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 45px rgba(0,0,0, 0.25);
    left: 50%;
}
.submitRegister{
    background-color: orange;
    border: 2px solid orange;
    width: 100%;
    transition: all 0.5s ease-in-out;
    color: white;
}
.submitRegister:hover{
    background-color: black;
    border: 2px solid orange;
    color: white;
}


</style>