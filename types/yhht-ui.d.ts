/*
 * @Author: daidai
 * @Date: 2021-09-28 17:07:15
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-08 10:24:22
 * @FilePath: \yhht-ui\yhht-ui\types\yhht-ui.d.ts
 */
import Vue from 'vue'
import {YhhtUIComponent} from "./component"
export interface InstallationOptions {
  locale: any,
}


export const version: string
export type Component = YhhtUIComponent

export function install (vue: typeof Vue, options: InstallationOptions): void



