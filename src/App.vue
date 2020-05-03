<template>
  <v-app>
    <v-toolbar color="primary" dark style="position:fixed; width:100%; z-index:9">
      <v-btn
        transition="scale-transition"
        class="mr-2"
        text
        large
        v-if="showBack"
        @click="$router.go(-1)"
      >
        <v-icon left large dark>mdi-chevron-left</v-icon>Back
      </v-btn>
      <v-toolbar-title v-else>
        <strong>Siddiquipro</strong>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon text>
        <v-icon>mdi-star</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content style="padding-top:64px;">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    showBack() {
      return this.$route.path != "/";
    }
  },
  data: () => ({
    bottomNav: "recent"
  })
};
</script>


<style>
body,
.v-content,
.application,
.container {
  background-color: #eaeeee;
}
.swal2-container {
  font-family: "Roboto";
}
</style>