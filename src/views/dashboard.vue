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
</style>