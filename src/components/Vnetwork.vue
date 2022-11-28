<template>
  <div>
  <v-network-graph
    class="graph"
    :nodes="nodes"
    :edges="edges"
  />
</div>
</template>

<script>
import { computed, ref, watch } from "vue"
import * as vNG from "v-network-graph"
//import data from "./data"
import { Point } from "v-network-graph"


  export default {
    name: 'Vnetwork',
    props: {
  },
  setup() {
    const nodes = {
    node1: { name: "Node 1" },
    node2: { name: "Node 2" },
    node3: { name: "Node 3" },
    node4: { name: "Node 4" },
  }

    const edges = {
    edge1: { source: "node1", target: "node2" },
    edge2: { source: "node2", target: "node3" },
    edge3: { source: "node3", target: "node4" },
  }
  return {nodes, edges}
  }
}
  

</script>

<style>
.graph {
  width: 800px;
  height: 600px;
  border: 1px solid rgb(255, 255, 255);
  background-color: #143553;
  margin: auto;
}

.tooltip-wrapper {
  position: relative;
}
.tooltip {
  top: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  width: 80px;
  height: 36px;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  background-color: #fff0bd;
  border: 1px solid #ffb950;
  box-shadow: 2px 2px 2px #aaa;
  transition: opacity 0.2s linear;
}
</style>