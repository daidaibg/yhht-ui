
import Vue, { PluginObject } from 'vue'
import { YhhtUIComponent, YhhtUIComponentSize, YhhtUIHorizontalAlignment } from './component'

import {YhDrag} from './drag'
export const version: string
export interface InstallationOptions {
    locale: any,
    i18n: any,
    size: string
  }
  /** The version of yhht-ui */
export const version: string
/**
 * Install all yhht-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(YhhtUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** YhhtUI component common definition */
export type Component = YhhtUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = YhhtUIComponentSize
/** Horizontal alignment */
export type HorizontalAlignment = YhhtUIHorizontalAlignment
/** yh-drag Component */
export class Drag extends YhDrag {}


