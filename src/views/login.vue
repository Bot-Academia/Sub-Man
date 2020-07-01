<template>
<div >
    <div class="bg-img">
        <div class="header1">
            <app-header></app-header>
        </div>
    </div>
    <br>
    <div class="jumbotron container">
        <h1><b>Login</b></h1>
        <br>
        <form class="container">
        <b-form-input v-model="text" placeholder="E-Mail" :type="'email'" :state="null" required></b-form-input>
        <br>
        <b-form-input v-model="text" placeholder="Password" :type="'password'" :state="null" required></b-form-input>
        <br>
        <b-button variant="success"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</b-button>
        </form>
        <br><br>
        <p>New to Subman?<router-link to="/"> Sign up now</router-link></p>
    </div>
    <appfooter></appfooter>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
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
        min-height: 300px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
    }
    .header1{
        background-color: rgba(150, 152, 153,0.3);
    }

.jumbotron{
	background: rgba(0, 0, 0, 0.75);
    width: 35%;
    height: 50%;
    margin-top: 3%;
    color: white;
}
.jumbotron button{
    float: right;
}

@media (max-width: 900px){
    .jumbotron{
        width: 50%;
    }
}
@media (max-width: 400px){
    .jumbotron{
        width: 70%;
    }
}

</style>