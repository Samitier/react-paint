import { ToolType } from "../../model/tool-type.model"
import { ToolsStoreActions, useToolsStore } from "../../store/tools.store"
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
  }
]

export const ToolBar = () => {

  const [state, dispatch] = useToolsStore()

  function onSelectTool(tool:ToolType) {
    dispatch(ToolsStoreActions.selectTool, tool)
  }

  function onUndo() {
    console.log("TODO")
  }

  function onRedo() {
    console.log("TODO")
  }

  return (
    <Card>
      <Grid columns={2}>
        {
        tools.map(t => <Button 
          icon={t.icon}
          key={t.icon}
          onClick={() => onSelectTool(t.tool)}
          isSelected={t.tool === state.selectedTool}/>
          )
        }
        <Button 
          icon={IconType.undo}
          onClick={() => onUndo()}
        />
        <Button 
          icon={IconType.redo}
          onClick={() => onRedo()}
        />
      </Grid>
    </Card>
  )
}