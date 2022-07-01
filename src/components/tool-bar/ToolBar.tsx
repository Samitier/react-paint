import { ToolType } from "../../model/tool-type.model"
import { PaintStoreActions, usePaintStore } from "../../store/paint.store"
import { Button } from "../ui/button/Button"
import { Card } from "../ui/card/Card"
import { Grid } from "../ui/grid/Grid"
import { IconType } from "../ui/icon/Icon"

const tools = [
  {
    icon: IconType.pencil,
    tool: ToolType.pencil,
  },
  {
    icon: IconType.eraser,
    tool: ToolType.eraser,
  },
  {
    icon: IconType.bucket,
    tool: ToolType.bucket,
  },
  {
    icon: IconType.shape,
    tool: ToolType.shape,
  },
  {
    icon: IconType.undo,
    tool: ToolType.undo, // FIXME: undo is not a tool
  },
  {
    icon: IconType.redo,
    tool: ToolType.redo // FIXME: undo is not a tool
  },
]

export const ToolBar = () => {

  const [state, dispatch] = usePaintStore()

  function onSelectTool(tool:ToolType) {
    dispatch(PaintStoreActions.selectTool, tool)
  }

  return (
    <Card>
      <Grid columns={2}>{
        tools.map(t => <Button 
          icon={t.icon}
          key={t.icon}
          onClick={() => onSelectTool(t.tool)}
          isSelected={t.tool === state.selectedTool}/>
        )
      }</Grid>
    </Card>
  )
}