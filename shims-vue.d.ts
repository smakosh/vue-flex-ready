declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module "vue-styled-components" {
  import * as CSS from "csstype";
  import * as Vue from "vue";
  import { defineComponent, ExtractPropTypes } from "@vue/composition-api";
  type ExcludeArrayString<T> = T extends string[] ? never : T;
  type VueProps = ExcludeArrayString<
    Parameters<typeof defineComponent>[0]["props"]
  >;

  export type CSSProperties = CSS.Properties<string | number>;

  export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

  export interface CSSObject extends CSSProperties, CSSPseudos {
    [key: string]: CSSObject | string | number | undefined;
  }

  export type CSS = CSSProperties;

  export type StyledComponent<Props extends VueProps> = Vue.Component &
    Vue.VueConstructor & {
      extend<U extends VueProps>(
        cssRules: TemplateStringsArray,
        ...interpolate: TemplateStringsArray[]
      ): StyledComponent<Props & U>;
      withComponent<V extends VueProps>(
        target: Vue.VueConstructor
      ): StyledComponent<Props & V>;
    } & { new (props: ExtractPropTypes<Props>): Vue.Component };

  export type StyledComponentElements = {
    [k in keyof HTMLElementTagNameMap]: (
      str: TemplateStringsArray
    ) => StyledComponent<{}>;
  };

  export type Component =
    | HTMLElementTagNameMap
    | keyof HTMLElementTagNameMap
    | Vue.Component
    | Vue.VueConstructor;

  export type Styled = StyledComponentElements & {
    <T extends Component, Props extends VueProps>(
      Component: T,
      props?: Props
    ): (
      str: TemplateStringsArray,
      ...placeholders: ((
        props: ExtractPropTypes<Props>
      ) => string | string | { toString: () => string | string })[]
    ) => StyledComponent<Props>;
  };

  export let styled: Styled;

  export default styled;
}
