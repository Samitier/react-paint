import { initHookStore } from "../hooks/initHooksStore";
import { ToolType } from "../model/tool-type.model";

export enum ToolsStoreActions {
  selectTool = "selectTool",
  selectColor = "selectColor",
}

const toolsStore = initHookStore(
  {
    [ToolsStoreActions.selectTool]: (state, selectedTool: ToolType) => {
      return {
        ...state,
        selectedTool,
      };
    },
    [ToolsStoreActions.selectColor]: (state, selectedColor: string) => {
      return {
        ...state,
        selectedColor,
      };
    },
  },
  {
    selectedTool: ToolType.pencil,
    selectedColor: "",
  }
);

export const useToolsStore = toolsStore.useStore;
