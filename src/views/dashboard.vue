<template>
    <div id="app">
        <appmenu :closeOnNavigation="true">
            <a id="home" @click="change('dash')">
                <span><i class="fa fa-bar-chart" aria-hidden="true"></i> DashBoard</span>
            </a>

            <a id="home" @click="change('appsub')">
                <span><i class="fa fa-money" aria-hidden="true"></i> Subscriptions</span>
            </a>

            <a id="home" @click="change('billing')">
                <span><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Billing</span>
            </a>

            <a id="home" @click="change('profile')">
                <span><i class="fa fa-user" aria-hidden="true"></i> My profile</span>
            </a>

            <br><br><br><br><br><br><br>
            <router-link id="home" to="/">
                <span @click="update"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</span>
            </router-link>
        </appmenu>
        <main id="page-wrap">

                <component :is="selected"></component>

        </main>
    </div>
</template>

<script>
    import { Slide } from 'vue-burger-menu'
    import profile from "../components/profile";
    import billing from "../components/billing";
    import sub from "../components/sub";
    import dash from "../components/dash";
    import axios from "axios";

    export default {
        data(){
            return{
                selected: "dash",
            }
        },
        components: {
            appmenu: Slide,
            profile: profile,
            billing: billing,
            appsub: sub,
            dash: dash
        },
        methods: {
            change(item) {
                this.selected= item;
            },
            update(){
                let key=this.$route.params.id;
                axios.put(`https://subman-f6e20.firebaseio.com/user/${key}/active.json`,this.$store.state.active);
            }
        }
    }
</script>

<style scoped>
#page-wrap{
    margin-left: 25px;
    margin-top: 100px;
}
    #home{
        color: #228be6;
    }
    a{
        cursor: pointer;
    }

    #app{
        background-image: url("../assets/sbg.jpg");
        width: 100%;
        z-index: 0;
    }
</style>