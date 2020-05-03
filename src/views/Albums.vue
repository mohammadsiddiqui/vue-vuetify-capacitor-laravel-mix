<template>
  <div>
    <v-card v-for="x in items" flat color="white" class="ma-2" :key="x.id">
      <v-list-item two-line @click="goToDetail(x)">
        <v-list-item-content>
          <v-list-item-title>{{ x.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ x.userId }} / {{x.id}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Albums",
  data: () => ({ items: [] }),
  methods: {
    goToDetail(x) {
      this.$router.push(`/photos/${x.id}`);
    },
    async getData(id) {
      let loader = this.$loading.show();
      try {
        let url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
        const { data } = await axios.get(url);
        this.items = data;
      } catch (error) {
        console.log(error);
      }
      loader.hide();
    }
  },
  created() {
    this.getData(this.$route.params.id);
  }
};
</script>