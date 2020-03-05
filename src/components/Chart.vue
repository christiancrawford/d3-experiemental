<template>
  <div>
    <h1>Data Visualization using D3</h1>
    <div v-html="output"></div>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "DataVisualization",
  props: ["dataVisualizationData"],
  // data() {},
  // created() {},
  methods: {
    DataVisualization() {
      const div = d3
        .create("div")
        .style("font", "10px sans-serif")
        .style("text-align", "right")
        .style("color", "white");

      div
        .selectAll("div")
        .data(this.dataVisualizationData)
        .join("div")
        .style("background", "steelblue")
        .style("padding", "3px")
        .style("margin", "1px")
        .style("width", d => `${d * 10}px`)
        .text(d => d);

      return div.node().innerHTML;
    }
  },
  computed: {
    // dVizData() {},
    output() {
      console.log("output");
      return this.DataVisualization();
    }
  }
};
</script>

<style>
</style>