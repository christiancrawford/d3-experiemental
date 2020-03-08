<template>
  <div class="container">
    <div class="card">
      <header class="card-header">
        <h1 class="card-header-title has-text-centered">Data Visualization using D3</h1>
      </header>
      <div class="card-content">
        <div class="content">
          <svg :style="{ width: width, height: height }" v-html="output" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  letter: "BarChart",
  props: ["data"],
  data() {
    return {
      height: 500,
      width: 420,
      x: Number,
      y: Number,
      margin: {},
      yTitle: "",
      yAxis: Number,
      xAxis: Number
    };
  },
  methods: {
    BarChart() {
      this.yTitle = g =>
        g
          .append("text")
          .attr("font-family", "sans-serif")
          .attr("font-size", 10)
          .attr("y", 10)
          .text("↑ Frequency");

      this.yAxis = g =>
        g
          .attr("transform", `translate(${this.margin.left},0)`)
          .call(d3.axisLeft(this.y).ticks(null, "%"))
          .call(g => g.select(".domain").remove());

      this.xAxis = g =>
        g
          .attr("transform", `translate(0,${this.height - this.margin.bottom})`)
          .call(d3.axisBottom(this.x).tickSizeOuter(0));

      this.margin = { top: 20, right: 0, bottom: 30, left: 40 };

      this.y = d3
        .scaleLinear()
        .domain([0, d3.max(this.data, d => d.frequency)])
        .range([this.height - this.margin.bottom, this.margin.top]);

      this.x = d3
        .scaleBand()
        .domain(this.data.map(d => d.letter))
        .rangeRound([this.margin.left, this.width - this.margin.right])
        .padding(0.1);

      const svg = d3
        .create("svg")
        .attr("viewBox", [0, 0, this.width, this.height]);

      svg
        .append("g")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(this.data)
        .join("rect")
        .attr("x", d => this.x(d.letter))
        .attr("y", d => this.y(d.frequency))
        .attr("height", d => this.y(0) - this.y(d.frequency))
        .attr("width", this.x.bandwidth());

      svg.append("g").call(this.xAxis);

      svg.append("g").call(this.yAxis);

      svg.call(this.yTitle);

      return svg.node().innerHTML;
    }
  },
  computed: {
    output() {
      return this.BarChart();
    }
  }
};
</script>

<style>
svg {
  display: block;
  font-size: 10px;
  text-anchor: end;
  margin: auto;
}
</style>