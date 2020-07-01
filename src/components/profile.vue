<template>
    <div class="container">
        <h1>My Profile</h1>
        <br>
        <div class="row">
            <div class="col-lg-5 col-md-6 col-sm-12 card">
                <br>
            <h2>Name</h2>
            <br>
            <h4 v-if="name_flag">{{user.user_name}}</h4>
            <b-input  :type="'text'" v-if="!name_flag" v-model="user.user_name"></b-input>
            <br>
            <button class="btn btn-danger" @click="name_flag=!name_flag" v-if="name_flag">Edit</button>
            <button class="btn btn-success" @click="name_flag=!name_flag" v-else>Submit</button>
            <br>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-12 card">
                <br>
            <h2>E-Mail</h2>
            <br>
            <h4 v-if="email_flag">{{user.email}}</h4>
            <b-input  :type="'text'" v-if="!email_flag" v-model="user.email"></b-input>
            <br>
            <button class="btn btn-danger" @click="email_flag=!email_flag" v-if="email_flag">Edit</button>
            <button class="btn btn-success" @click="email_flag=!email_flag" v-else>Submit</button>
            <br>
            </div>
        </div>
        <br><br>
        <div class="row">
           <div class="col-lg-5 col-md-6 col-sm-12 card">
               <br>
            <h2>Password</h2>
            <br>
            <h4 v-if="password_flag">{{user.password}}</h4>
            <b-input  :type="'text'" v-if="!password_flag" v-model="user.password"></b-input>
            <br>
            <button class="btn btn-danger" @click="password_flag=!password_flag" v-if="password_flag">Edit</button>
            <button class="btn btn-success" @click="password_flag=!password_flag" v-else>Submit</button>
            <br>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-12 card">
                <br>
            <h2>Country</h2>
            <br>
            <h4 v-if="country_flag">{{user.country}}</h4>
            <b-input  :type="'text'" v-if="!country_flag" v-model="user.country"></b-input>
            <br>
            <button class="btn btn-danger" @click="country_flag=!country_flag" v-if="country_flag">Edit</button>
            <button class="btn btn-success" @click="country_flag=!country_flag" v-else>Submit</button>
            <br>
            </div>
        </div>
        <br><br><br>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: "profile",
        data: function(){
            return {
                name_flag: true,
                email_flag: true,
                password_flag: true,
                country_flag: true,
               user:{ 
                user_name: "name",
                email: "test@test.com",
                password: "password",
                country: "country",
                active:[]},
                key: null,
            };
        },
        mounted(){
            axios.get("https://subman-f6e20.firebaseio.com/user.json")
            .then(response=>{
                const data = response.data;
                this.key=this.$route.params.id;
                this.user.user_name=data[this.key].user_name;
                this.user.email=data[this.key].email;
                this.user.password=data[this.key].password;
                this.user.country=data[this.key].country;               
                console.log("mounted");
            })
        },
        destroyed(){
            axios.put(`https://subman-f6e20.firebaseio.com/user/${this.key}.json`,this.user);
        }
    }
</script>

<style scoped>
.card{
    background-color: rgba(34, 139, 230,0.7);
    box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
    width: 25%;
    margin-left: 20px;
    margin-top: 20px;
}
button{
    width: 100px;
}

@media (max-width: 574px){
    .card{
        width: 60%;
    }
}
</style>