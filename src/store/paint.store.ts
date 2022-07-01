import { initHookStore } from "../hooks/initHooksStore";
import { Layer } from "../model/layer";
import { ToolType } from "../model/tool-type.model";

export enum PaintStoreActions {
  selectTool = "selectTool",
  selectColor = "selectColor",
  addLayer = "addLayer",
  updateLayer = "updateLayer",
  removeLayer = "removeLayer",
}

const paintStore = initHookStore(
  {
    [PaintStoreActions.selectTool]: (state, selectedTool: ToolType) => {
      return {
        ...state,
        selectedTool,
      };
    },
    [PaintStoreActions.selectColor]: (state, selectedColor: string) => {
      return {
        ...state,
        selectedColor,
      };
    },
    [PaintStoreActions.addLayer]: (state, layer: Layer) => {
      return {
        ...state,
        layers: [...state.layers, { ...layer }],
      };
    },
    [PaintStoreActions.updateLayer]: (state, layer: Layer) => {
      return {
        ...state,
        layers: state.layers.map((l) => {
          if (l.id === layer.id) return { ...layer };
          return l;
        }),
      };
    },
    [PaintStoreActions.removeLayer]: (state, layer: Layer) => {
      return {
        ...state,
        layers: state.layers.filter((l) => l.id !== layer.id),
      };
    },
  },
  {
    selectedTool: ToolType.pencil,
    selectedColor: "",
    layers: [{ id: "1", opacity: 1, paths: [] }] as Layer[],
  }
);

export const usePaintStore = paintStore.useStore;
