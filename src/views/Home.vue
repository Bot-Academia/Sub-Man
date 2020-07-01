<template>
    <div>
        <appheader></appheader>
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

</style>