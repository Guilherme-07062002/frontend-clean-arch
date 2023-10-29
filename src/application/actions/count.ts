import { ActionTypes } from "./types";

export interface CountAction {
  type: ActionTypes.COUNT;
  info: 'add +1 to counter'
};
