import style from './PaletteBar.module.css'
import { ToolsStoreActions, useToolsStore } from "../../store/tools.store"
import { Card } from "../ui/card/Card"
import { ColorButton } from "../ui/color-button/ColorButton"
import { Grid } from "../ui/grid/Grid"
import { useEffect } from 'react'

const paletteColors = [
 "#97c89b",
 "#3e8e92",
 "#305472",
 "#1c1f2b",
 "#2c313c",
 "#625e60",
 "#999172",
 "#dfcd6d",
 "#b78f43",
 "#895c35",
]

export const PaletteBar = () => {
  const [state, dispatch] = useToolsStore()

  useEffect(() => {
    if (state.selectedColor) return
    dispatch(ToolsStoreActions.selectColor, paletteColors[0])
  }, [state.selectedColor, dispatch])

  function onSelectColor(color: string) {
    dispatch(ToolsStoreActions.selectColor, color)
  }

  return (
    <Card>
      <Grid columns={2}>{
        paletteColors.map((color, i) => <ColorButton color={color} key={ i } onClick={ () => onSelectColor(color) } />)
      }</Grid>
      <div className={style.selectedColor} style={{ backgroundColor: state.selectedColor }} />
    </Card>
  )
}