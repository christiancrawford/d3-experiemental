<template>
  <div id="app" class="container">
    <aside class="menu">
      <p class="menu-label">Charts</p>
      <ul class="menu-list">
        <li>
          <router-link to="/">Hello World</router-link>
        </li>
        <li>
          <router-link to="/barchart">Bar Chart</router-link>
        </li>
      </ul>
    </aside>
    <router-view :data="loadData" />
  </div>
</template>

<script>
import { csv, autoType } from "d3";

export default {
  name: "app",
  components: {},
  data() {
    return {
      loadData: []
    };
  },
  mounted() {
    console.log("App loaded");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let fileData;
      await csv("./alphabet.csv", autoType).then(data => {
        fileData = data;
      });
      this.loadData = fileData;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>