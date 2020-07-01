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
        <b-form-input v-model="user.email" placeholder="E-Mail" :type="'email'" :state="null" required></b-form-input>
        <br>
        <b-form-input v-model="user.password" placeholder="Password" :type="'password'" :state="null" required></b-form-input>
        <br>
       <router-link :to='route'><b-button variant="success" @click="submit"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</b-button></router-link>
        </form>
        <br><br>
        <p>New to Subman?<router-link to="/signup"> Sign up now</router-link></p>
        <div class="alert alert-danger" v-show="flag">You are not registered.</div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <appfooter></appfooter>
</div>
</template>




<script>
import header from "../components/header";
import footer from "../components/footer";
import axios from "axios";
export default {
    components: {
        appHeader: header,
        appfooter: footer
    },
    data:function (){
      return{  
        user:{
            email: null,
            password: null,
            id: "id"
        },
        clients: null,
        flag: false,
        route: "",
        top: 0
      }
    },
    methods:{
       async submit(){
           await axios.get('https://subman-f6e20.firebaseio.com/user.json')
            .then(
               response=>{
                    this.clients=response.data;
                    console.log(this.clients);
                       for(let key in this.clients){ 
          
         if(this.clients[key].email===this.user.email && this.clients[key].password===this.user.password)
               { this.top=1;
               console.log('false');
               key=String(key);
               this.route='/'+key+'/dashboard';
               for(var i=0;i<this.clients[key].active.length;i++){
                   this.$store.state.active[i]=this.clients[key].active[i];
               }
               }
            }
                if(this.top===1)
                    this.flag=false;
                else
                    this.flag=true;
                }
            );  
        }
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