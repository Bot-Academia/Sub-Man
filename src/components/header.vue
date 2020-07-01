<template>
<div id="header">
<b-navbar toggleable="lg" type="dark" class="navbar navbar-expand-lg navbar-dark">
      <b-navbar-brand href="#"
                      id="navbar-brand"
                      @click="change1('apphome')"
                      style="color: #228be6; font-size: 30px; font-weight: 800"
        >Subman</b-navbar-brand
      >
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item
                    style="color: #228be6;font-size: 30px; font-weight: 400;">Pied_Piper</b-nav-item>
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
    color: #228be6;
}
</style>