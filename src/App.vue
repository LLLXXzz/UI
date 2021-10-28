<template>
  <div>
    导航栏 | <router-link to="/">Lxz</router-link> |
    <router-link to="/2">Lxz2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
import Lxz from "./components/Lxz.vue";
import Lxz2 from "./components/Lxz2.vue";

export default {
  name: "App",
  components: {
    Lxz,
    Lxz2,
  },
};
</script>
