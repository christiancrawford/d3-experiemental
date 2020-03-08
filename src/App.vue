<template>
  <div id="app">
    <b-menu>
      <b-menu-list label="Menu">
        <router-link to="/" label>Hello World</router-link>
        <router-link to="/barchart">Bar Chart</router-link>
        <router-view :data="loadData" />
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
import * as d3 from "d3";

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
      await d3.csv("./alphabet.csv", d3.autoType).then(data => {
        fileData = data;
      });
      this.loadData = fileData;
    }
  }
};
</script>

<style>
#app {
 
}
</style>