<script lang="ts">
import Vue from "vue";
import { ItemProps } from "@/types";
import { StyledItem } from "@/styles";

const Item = Vue.extend({
  name: "item-component",
  props: ItemProps,
  components: {
    "styled-item": StyledItem,
  },
});

export default Item;
</script>

<template>
  <styled-item
    :col="$props.col"
    :colTablet="$props.colTablet"
    :colMobile="$props.colMobile"
    :gap="$props.gap"
    :marginBottom="$props.marginBottom"
    :stretch="$props.stretch"
    :as="$props.as"
  >
    <slot />
  </styled-item>
</template>
