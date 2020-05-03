<template>
  <div class="about">
    <v-toolbar flat>
      <v-toolbar-title>Album Photos for {{$route.params.id}}</v-toolbar-title>
    </v-toolbar>
    <v-card class="ma-2" v-for="x in items" :key="x.id">
      <v-card-title>{{x.title}}</v-card-title>
      <v-img
        :src="x.url"
        :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>

    <v-card class="ma-2">
      <v-card-title class="title">Random Photos</v-card-title>

      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                      :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
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
        let url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
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
