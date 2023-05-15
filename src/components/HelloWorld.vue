<template>
  <div style="text-align: center;">
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">Count is {{ count }}</button>
      <p>
        Welcome to Crypto Invest
      </p>
      <router-link to="/register" class="primary-hover">Register</router-link>
      <span style="margin-right: 10px;"></span>
      <router-link to="/login" class="primary-hover">Login</router-link>
    </div>
  </div>

  <!-- <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>
<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
