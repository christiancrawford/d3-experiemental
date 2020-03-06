<template>
  <div id="app">
    <DataVisualization :vizualizationData="loadData" />
  </div>
</template>

<script>
import DataVisualization from "./components/Chart.vue";

export default {
  name: "app",
  components: {
    DataVisualization
  },
  data: function() {
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
      let data = [4, 8, 15, 16, 23, 41];
      this.loadData = data;
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