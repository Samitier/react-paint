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

export const Canvas = () => {
  const [isDrawing, setIsDrawing] = useState(false)
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
  }, [canvas])

  function onMouseDown() {
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
    console.log("DRAW", x, y)
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
