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

  export default {
    name: 'Vnetwork',
    props: {

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
</style>