import { useToolsStore } from "../../store/tools.store"
import { Canvas } from "../ui/canvas/Canvas"

export const AppCanvas = () => {
  const [toolsStore] = useToolsStore()

  return <Canvas currentStrokeColor={toolsStore.selectedColor} />
}
