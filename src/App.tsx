import styles from "./App.module.css"
import { AppCanvas } from "./components/app-canvas/app-canvas"
import { LayerBar } from "./components/layer-bar/LayerBar"
import { PaletteBar } from "./components/palette-bar/PaletteBar"
import { ToolBar } from "./components/tool-bar/ToolBar"
import { Flex } from "./components/ui/flex/Flex"

export const App = () => {
  return (
    <Flex verticalAlign="center" gap="md">
      <PaletteBar />
      <div className={styles.canvas}>
        <AppCanvas />
        <LayerBar />
      </div>
      <ToolBar />
    </Flex>
  )
}
