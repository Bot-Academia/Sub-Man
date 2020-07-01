<template>
    <div id="home">
        <div class="bg-img">
            <div class="header1">
                <appheader></appheader>
            </div>
        </div>
        <div class="back">
            <div class="container login">
                <h1>SUBcription-MANager</h1>
                <h2>A place to keep all your subscriptions </h2>
                <router-link to="/login"><button class="btn btn-dark"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button></router-link>
                <router-link to="/"><button class="btn btn-dark"><i class="fa fa-user-plus" aria-hidden="true"></i> Sign up</button></router-link>
                <p><button class="btn btn-dark" ><a href="#feature">See Features</a></button></p>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#228be6" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,165.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,85.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

        <br>
        <feature id="feature"></feature>
        <br><br>
        <appfooter></appfooter>
    </div>
</template>



<script>
import header from  "../components/header";
import footer from "../components/footer";
import parallax from "../components/parallax";

export default {
    components:{
        appheader: header,
        appfooter: footer,
        feature: parallax
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
    .login{
        text-align: center;
        color: white;
        padding-top: 50px;
        padding-bottom: 20px;
    }
    h1{
        font-weight: 800;
    }
    .back{
        background-color: #228be6;
    }
    button{
        font-size: 34px;
        margin: 10px 10px 10px 10px;
    }
    a:hover{
        text-decoration: none;
    }
    h2{
        font-weight: 500;
    }
</style>