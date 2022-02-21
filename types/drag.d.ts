
import { YhhtUIComponent } from "./component";
import { VNode } from 'vue'

export interface DragSlots {
  header: VNode[];

  close: VNode[];

  [key: string]: VNode[];
}

/**  type */
export type DragType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
/** drag Component */
export declare class YhDrag extends YhhtUIComponent {
  /** Callback before drag closes, and it will prevent Dialog from closing */
  beforeClose: (done: Function) => void;
  /** Title of Dialog */
  title: string;
  
  type: DragType

  /** Width of Dialog */
  width: string;

  /** titleBackgronud of drag */
  titleBackgronud: string;

  /** top of Dialog */
  top: string;

  /** titleAlign of drag */
  titleAlign: string;

  /** closeStyle of drag */
  closeStyle: string;

  /** showClose of drag */
  showClose: string;

  /** borderRadius of drag */
  borderRadius: number;

  $slots: DragSlots;
}
