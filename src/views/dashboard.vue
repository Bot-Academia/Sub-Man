<template>
    <div id="app">
        <appmenu>
            <a id="home" href="#">
                <span><i class="fa fa-bar-chart" aria-hidden="true"></i> DashBoard</span>
            </a>

            <a id="home" href="#">
                <span><i class="fa fa-money" aria-hidden="true"></i> Subscriptions</span>
            </a>

            <a id="home" href="#">
                <span><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Billing</span>
            </a>

            <a id="home" href="#">
                <span><i class="fa fa-user" aria-hidden="true"></i> My profile</span>
            </a>
        </appmenu>
        <main id="page-wrap">
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto doloremque eum fugiat incidunt ipsam perferendis quaerat. Dolorum eius est eveniet, facere in ipsam, numquam obcaecati quae ratione repellat similique?</h1>
        </main>
    </div>
</template>

<script>
    import { Slide } from 'vue-burger-menu'

    export default {
        components: {
            appmenu: Slide
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
</style>