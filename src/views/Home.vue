<template>
    <div id="home">
        <div class="bg-img">
            <appheader></appheader>
        </div>

        <br>
        <feature></feature>
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
    min-height: 380px;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    /* Needed to position the navbar */
    position: relative;
}

</style>