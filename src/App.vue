<template>
  <div id="app">
    <DataVisualization :data="loadData" />
  </div>
</template>

<script>
import * as d3 from "d3";
import DataVisualization from "./components/Chart.vue";

export default {
  name: "app",
  components: {
    DataVisualization
  },
  data() {
    return {
      loadData: [],
      mydata: {}
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>