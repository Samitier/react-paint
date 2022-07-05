import styles from "./App.module.css"
import { LayerBar } from "./components/layer-bar/LayerBar"
import { PaletteBar } from "./components/palette-bar/PaletteBar"
import { ToolBar } from "./components/tool-bar/ToolBar"
import { Canvas } from "./components/ui/canvas/Canvas"
import { Flex } from "./components/ui/flex/Flex"

export const App = () => {
  return (
    <Flex verticalAlign="center" gap="md">
      <PaletteBar />
      <div className={styles.canvas}>
        <Canvas />
        <LayerBar />
      </div>
      <ToolBar />
    </Flex>
  )
}
