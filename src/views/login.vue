<template>
<div id="login">
    <app-header></app-header>
    <br>
    login
</div>
</template>


<script>
import header from "../components/header";
export default {
    components: {
        appHeader: header
    }
}
</script>


<style scoped>
#login{
background: url("../assets/background.png");
}
</style>