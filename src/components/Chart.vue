<template>
  <div>
    <h1>Data Visualization using D3</h1>
    <svg :style="{ width: width }" v-html="output" />
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "DataVisualization",
  props: ["data"],
  data() {
    return { width: 0, x: Number, y: Number };
  },
  beforeUpdate() {
    this.calcWidth();
  },
  methods: {
    calcWidth() {
      this.width = 420;
    },
    DataVisualization() {
      this.x = d3
        .scaleLinear()
        .domain([0, d3.max(this.data, d => d.value)])
        .range([0, this.width]);

      this.y = d3
        .scaleBand()
        .domain(this.data.map(d => d.name))
        .range([0, 20 * this.data.length]);

      const svg = d3
        .create("svg")
        .attr("width", this.width)
        .attr("height", this.y.range()[1]);

      const bar = svg
        .selectAll("g")
        .data(this.data)
        .join("g")
        .attr("transform", d => `translate(0,${this.y(d.name)})`);

      bar
        .append("rect")
        .attr("fill", "steelblue")
        .attr("width", d => this.x(d.value))
        .attr("height", this.y.bandwidth() - 1);

      bar
        .append("text")
        .attr("fill", "white")
        .attr("x", d => this.x(d.value) - 3)
        .attr("y", this.y.bandwidth() / 2)
        .attr("dy", "0.35em")
        .text(d => d.value);

      return svg.node().innerHTML;
    }
  },
  computed: {
    output() {
      console.log("output");
      return this.DataVisualization();
    }
  }
};
</script>

<style>
svg {
  font-size: 10px;
  text-anchor: end;
}
</style>