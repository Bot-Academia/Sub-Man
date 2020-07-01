<template>
    <div id="app">
        <appmenu>
            <a id="home" href="#">
                <span>DashBoard</span>
            </a>

            <a id="home" href="#">
                <span>Subscriptions</span>
            </a>

            <a id="home" href="#">
                <span>Billing</span>
            </a>

            <a id="home" href="#">
                <span>My profile</span>
            </a>
        </appmenu>
        <main id="page-wrap">
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto doloremque eum fugiat incidunt ipsam perferendis quaerat. Dolorum eius est eveniet, facere in ipsam, numquam obcaecati quae ratione repellat similique?</h1>
        </main>
    </div>
</template>

<script>
    import { Push } from 'vue-burger-menu'

    export default {
        components: {
            appmenu: Push
        }
    }
</script>

<style scoped>
#page-wrap{
    margin: 20px 20px 20px 200px;
}
</style>