<template>
  <div>
    <Navigation />
    
    <v-layout wrap justify-center mt-8 >
      <v-flex xs4 pa-5 class="caja-formulario" elevation-2>
        <h2>¡Bienvenido! 👋</h2>
        <p>Ingresa a tu cuenta para disfrutar de los mejores blogs de viajes que tenemos para ti.</p>
        <v-form ref="form" lazy-validation>
          <v-text-field v-model="email" :rules="emailReglas" label="E-mail" required></v-text-field>
          <v-text-field v-model="password" type="password" :rules="passwordReglas" label="Password" required></v-text-field>
          <v-btn color="primary" block @click="validar">Ingresar</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout wrap justify-center mt-5>
        <v-flex xs7 v-show="isError">
        <v-alert dense text type="error">
          <strong>Lo sentimos!</strong> el usuario logeado no existe en los registros,<strong>Intentalo de nuevo</strong>.
        </v-alert>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Navigation from "./layout/Navigation";
export default {
  name: "Login",
  components: {
    Navigation,
  },
  data() {
    return {
      isError: false,
      email: "",
      emailReglas: [
        (v) => !!v || "E-mail es requerido",
        (v) => /.+@.+\..+/.test(v) || "E-mail ingresado no es valido",
      ],
      password: "",
      passwordReglas: [
        v =>  v.length >= 6 || "Debe contener al menos 6 caracteres",
      ],
    };
  },
  methods: {
    validar() {
      let isValido = this.$refs.form.validate();
      if (isValido) {
        console.log("pasa al blog");
      } else {
        this.isError = true
        setInterval(() => {
          this.isError = false
        }, 3500) 
      }
    },
  },
};
</script>

<style scoped>
.caja-formulario {
  background-color: white;
}
</style>
