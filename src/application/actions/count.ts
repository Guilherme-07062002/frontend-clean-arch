import { ActionTypes } from "./types";

export interface CountAction {
  type: ActionTypes.COUNT;
  info: 'Add +1 to counter'
};
