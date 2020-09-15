<template>
  <div>
    <Navigation />

    <v-layout wrap justify-center mt-8>
      <v-flex xs4 pa-5 class="caja-formulario" elevation-2>
        <h2>Registrate, es Gratis 😎</h2>
        <v-form ref="form" lazy-validation>
          <v-text-field v-model="nombre" :rules="nombreReglas" label="Nombre" required></v-text-field>
          <v-text-field v-model="email" :rules="emailReglas" label="E-mail" required></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            :rules="passwordReglas"
            label="Password"
            required
          ></v-text-field>
          <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="He leido y acepto los Términos y Condiciones y Política de privacidad de mi Cuenta."
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>
          <v-btn color="primary" block @click="validar">CREAR CUENTA</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout wrap justify-center mt-5>
      <v-flex xs7 v-show="isRegister">
        <v-alert dense text type="success">
          <strong>{{ nombre }}</strong> has sido registrado exitosamente! Un correo de verificación fue enviado a tu correo.
        </v-alert>
      </v-flex>
      <v-flex xs7 v-show="isError">
        <v-alert dense text type="error">
          <strong>Lo sentimos!</strong> ha ocurrido un error en el proceso de registro,
          <strong>Intentalo de nuevo</strong>.
        </v-alert>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Navigation from "./layout/Navigation";

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      isRegister: false,
      isError: false,
      nombre: "",
      nombreReglas: [(v) => !!v || "Nombre es requerido"],
      email: "",
      emailReglas: [
        (v) => !!v || "E-mail es requerido",
        (v) => /.+@.+\..+/.test(v) || "E-mail ingresado no es valido",
      ],
      password: "",
      passwordReglas: [
        (v) => v.length >= 6 || "Debe contener al menos 6 caracteres",
      ],
    };
  },
  methods: {
    validar() {
      let isValido = this.$refs.form.validate();
      if (isValido) {
        this.isRegister = true;
        setTimeout(() => {
          this.isRegister = false;
          this.$router.push("/login");
        }, 4000);
      } else {
        this.isError = true;
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