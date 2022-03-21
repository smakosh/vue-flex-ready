<script lang="ts">
import Vue from "vue";
import { FlexProps } from "@/types";
import { StyledFlex } from "@/styles";
import Item from "./Item.vue";

const Flex = Vue.extend({
  name: "flex-component",
  props: FlexProps,
  components: {
    "styled-flex": StyledFlex,
    "styled-item": Item,
  },
});

export default Flex;
</script>

<template>
  <styled-flex
    :col="$props.col"
    :colTablet="$props.colTablet"
    :colMobile="$props.colMobile"
    :gap="$props.gap"
    :marginBottom="$props.marginBottom"
    :stretch="$props.stretch"
    :align="$props.align"
    :as="$props.as"
  >
    <slot />
    <styled-item
      :col="$props.col"
      :colTablet="$props.colTablet"
      :colMobile="$props.colMobile"
      :gap="$props.gap"
      :marginBottom="$props.marginBottom"
      :stretch="$props.stretch"
    />
  </styled-flex>
</template>
