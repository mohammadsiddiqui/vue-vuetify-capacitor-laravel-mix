<template>
  <div>
    <v-card class="ma-2" v-for="x in items" color="white" :key="x.id" :to="'/albums/'+ x.id">
      <v-card-title>
        <span class="title">{{x.company.name}}</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="headline pa-4">{{x.company.catchPhrase}}</v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{x.name}}</v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-icon class="mr-1">mdi-heart</v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">mdi-share-variant</v-icon>
            <span class="subheading">45</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: () => ({ items: [] }),
  methods: {
    goToDetail(x) {
      this.$router.push(`/user/${x.id}`);
    },
    async getData() {
      let loader = this.$loading.show();
      try {
        let url = `https://jsonplaceholder.typicode.com/users`;
        const { data } = await axios.get(url);
        this.items = data;
      } catch (error) {
        console.log(error);
      }
      loader.hide();
    }
  },
  created() {
    this.getData();
  }
};
</script>