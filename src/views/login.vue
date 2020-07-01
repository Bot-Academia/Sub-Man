<template>
<div >
    <div class="bg-img">
        <div class="header1">
            <app-header></app-header>
        </div>
    </div>
    <br>
    <div class="jumbotron container">
        <form class="container">
        <b-form-input v-model="text" placeholder="E-Mail" :type="'email'" :state="null" required></b-form-input>
        <br>
        <b-form-input v-model="text" placeholder="Password" :type="'password'" :state="null" required></b-form-input>
        <br>
        <b-button variant="success">Login</b-button>
        </form>
    </div>
    <appfooter></appfooter>
</div>
</template>


<script>
import header from "../components/header";
import footer from "../components/footer";
export default {
    components: {
        appHeader: header,
        appfooter: footer
    }
}
</script>


<style scoped>
    .bg-img{
        background: url("../assets/background.png");
        min-height: 580px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
    }
    .header1{
        background-color: rgba(150, 152, 153,0.3);
    }
/*#login{*/
/*background: url("../assets/background.png");*/
/*max-height: 100%;*/
/*}*/
.jumbotron{
    margin-top: 5%;
	background: rgba(255,255,255,.5);
    width: 35%;
    height: 50%;
}
.jumbotron button{
    float: right;
}
</style>