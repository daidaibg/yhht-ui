
import Vue from 'vue'

/** YhhtUI component common definition */
export declare class YhhtUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type YhhtUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type YhhtUIHorizontalAlignment = 'left' | 'center' | 'right'
