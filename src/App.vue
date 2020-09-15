<template>
  <v-app>
      
    <v-main class="app">

      <v-container fluid pa-0 ma-0>

        <!-- Vistas por Vue Router -->
        <router-view />
      </v-container>
    </v-main>

    <v-footer class="footer">
      <div>Hecho con ❤️ en Temuco by Jcrz.</div>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.app {
  background-color: #fbfbfb;
}
.footer {
  width: 100%;
}
.footer div {
  margin: 0px auto;
}
* {
  /*outline: 1px solid rgb(203, 203, 203);*/
}
</style>
