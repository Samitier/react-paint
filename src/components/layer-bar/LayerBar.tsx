import React, { useEffect, useState } from "react"
import styles from './LayerBar.module.css'
import { Button } from "../ui/button/Button"
import { Card } from "../ui/card/Card"
import { Flex } from "../ui/flex/Flex"
import { Grid } from "../ui/grid/Grid"
import { IconType } from "../ui/icon/Icon"
import { InputRange } from "../ui/input-range/InputRange"
import { PaintStoreActions, usePaintStore } from "../../store/paint.store"
import { Layer } from "../../model/layer"


const maxLayersAllowed = 5

export const LayerBar = () => {
  const [state, dispatch] = usePaintStore()
  const [selectedLayer, setSelectedLayer] = useState<Layer>(state.layers[0])

  useEffect(() => {
    const storeSelectedLayer = state.layers.find(l => l.id === selectedLayer.id)
    setSelectedLayer(storeSelectedLayer ? storeSelectedLayer : state.layers[0])
  }, [state.layers, selectedLayer.id])

  function onAddLayer() {
    const newLayerId = parseInt(state.layers[state.layers.length - 1].id) + 1
    dispatch(PaintStoreActions.addLayer, { id: newLayerId.toString(), opacity: 1, paths: []})
  }

  function onRemoveLayer() {
    dispatch(PaintStoreActions.removeLayer, selectedLayer)
  }
  
  function onUpdateSelectedLayerOpacity(opacity: number) {
    dispatch(PaintStoreActions.updateLayer, {...selectedLayer, opacity })
  }

  return (
  <Flex className={styles.layerBar} justify="center">
    <Card>
      <div className={styles.spacer}/>
      <Grid columns={7}>
        { state.layers.map(l => 
          <Button
            text={l.id}
            isSelected={l.id === selectedLayer?.id }
            onClick={() => setSelectedLayer(l) }
            key={l.id} 
          />
        ) }
        { state.layers.length < maxLayersAllowed && <Button icon={IconType.add} onClick={onAddLayer} /> }
        { state.layers.length > 1 && <Button icon={IconType.delete} onClick={onRemoveLayer} /> }
      </Grid>
    </Card>
    {
      selectedLayer && <Card>
        <div className={styles.spacer}/>
        <InputRange 
          min={0}
          max={1}
          step={0.01}
          iconMin="o"
          iconMax="O"
          value={selectedLayer.opacity} 
          onChange={onUpdateSelectedLayerOpacity}
        />
      </Card>
    }
  </Flex>
  )
}