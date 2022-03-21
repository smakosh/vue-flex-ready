<script lang="ts">
import Vue from "vue";
import { Flex, Item } from "@/entry.esm";
import list from "./list";

export default Vue.extend({
  name: "App",
  data() {
    return {
      list,
    };
  },
  components: {
    "flex-component": Flex,
    "item-component": Item,
  },
});
</script>

<template>
  <div id="app">
    <div class="container">
    <h1>Example</h1>
    <flex-component :col="4" class="teesting">
      <item-component
        v-for="(column, i) of list"
        :key="i"
        :col="column.columns"
        :colTablet="6"
        :colMobile="12"
        :gap="1"
        :marginBottom="30"
        :stretch="true"
        class="test"
      >
        <div class="column">
          <h1>{{ column.columns }}</h1>
        </div>
      </item-component>
    </flex-component>
  </div>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 960px;
  margin: 0 auto;
}
.column {
  text-align: center;
  width: 100%;
  border: 1px solid #eee;
  background: #eee;
}
</style>