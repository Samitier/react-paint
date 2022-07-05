import { initHookStore } from "../hooks/initHooksStore"
import { Layer } from "../model/layer"

export enum LayersStoreActions {
  addLayer = "addLayer",
  updateLayer = "updateLayer",
  removeLayer = "removeLayer",
}

const layersStore = initHookStore(
  {
    [LayersStoreActions.addLayer]: (state, layer: Layer) => {
      return {
        ...state,
        layers: [...state.layers, { ...layer }],
      }
    },
    [LayersStoreActions.updateLayer]: (state, layer: Layer) => {
      return {
        ...state,
        layers: state.layers.map((l) => {
          if (l.id === layer.id) return { ...layer }
          return l
        }),
      }
    },
    [LayersStoreActions.removeLayer]: (state, layer: Layer) => {
      return {
        ...state,
        layers: state.layers.filter((l) => l.id !== layer.id),
      }
    },
  },
  {
    layers: [{ id: "1", opacity: 1, paths: [] }] as Layer[],
  }
)

export const useLayersStore = layersStore.useStore
