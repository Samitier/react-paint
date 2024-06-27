import styles from "./Canvas.module.css"
import { Card } from "../card/Card"
import { useRef, useEffect, MutableRefObject, useState } from "react"

const width = 1414
const height = 1000

function getBoundedMousePosition(rect: DOMRect, x: number, y: number) {
  const scaleX = width / rect.width
  const scaleY = height / rect.height

  return {
    x: (x - rect.left) * scaleX,
    y: (y - rect.top) * scaleY,
  }
}

type Path = { x: number; y: number; strokeColor?: string }

type CanvasProps = {
  currentStrokeColor: string
}

export const Canvas = (props: CanvasProps) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const [paths, setPaths] = useState<Path[]>([])
  const canvas =
    useRef<HTMLCanvasElement>() as MutableRefObject<HTMLCanvasElement>

  useEffect(() => {
    canvas.current.width = width
    canvas.current.height = height

    const context = canvas.current?.getContext("2d")
    if (!context) return

    context.rect(0, 0, width, height)
    context.fillStyle = "#FFF"
    context.fill()

    context.lineCap = "round"
    for (let i = 0; i < paths.length; ++i) {
      if (i === 0) context.moveTo(paths[0].x, paths[0].y)
      if (paths[i].strokeColor) {
        context.stroke()
        context.beginPath()
        context.moveTo(paths[i].x, paths[i].y)
        context.lineWidth = 10
        context.strokeStyle = paths[i].strokeColor ?? ""
      } else context.lineTo(paths[i].x, paths[i].y)
    }
    context.stroke()
  }, [canvas, paths])

  function onMouseDown(event: any) {
    const { clientX, clientY } = event as MouseEvent
    const { x, y } = getBoundedMousePosition(
      canvas.current.getBoundingClientRect(),
      clientX,
      clientY
    )
    setPaths([...paths, { x, y, strokeColor: props.currentStrokeColor }])
    setIsDrawing(true)
  }

  function onMouseUp() {
    setIsDrawing(false)
  }

  function onMouseMove(event: any) {
    if (!isDrawing) return
    const { clientX, clientY } = event as MouseEvent
    const { x, y } = getBoundedMousePosition(
      canvas.current.getBoundingClientRect(),
      clientX,
      clientY
    )
    setPaths([...paths, { x, y }])
  }

  return (
    <Card className={styles.canvasCard}>
      <canvas
        ref={canvas}
        className={styles.canvas}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      />
    </Card>
  )
}
