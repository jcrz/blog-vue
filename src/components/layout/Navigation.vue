<template>
  <v-container my-3>
      <v-layout>
          <v-flex md8 >
              <h1>BlogTravel</h1>
          </v-flex>
          
          <v-flex md2 text-right>
              <v-btn class="ma-2" tile color="indigo" @click="registrar" dark>Registrarse</v-btn>
          </v-flex>

          <v-flex md2 text-center>
              <v-btn class="ma-2" tile outlined color="success" @click="iniciarSesion">Iniciar Sesión</v-btn>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    methods: {
        registrar() {
            this.$router.push('/register')
        },
        iniciarSesion() {
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>

</style>