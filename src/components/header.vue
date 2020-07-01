<template>
<div id="header">
<b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#" id="navbar-brand" @click="change1('apphome')"
        >Subman</b-navbar-brand
      >
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item>Pied_Piper</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
    </b-navbar>
</div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
#header{
    background-color: transparent;
    color: black;
}

</style>