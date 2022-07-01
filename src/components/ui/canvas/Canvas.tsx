import styles from './Canvas.module.css'
import { Card } from "../card/Card"

export const Canvas = () => {
  // const canvas = useRef<HTMLCanvasElement>()

  // useEffect(() => {
  //   const context = canvas.current?.getContext('2d')
  //   context?.clearRect(0, 0, canvas.current?.width ?? 0, canvas.current?.height ?? 0)
  // }, [canvas])

  return (
    <Card className={styles.canvasCard}>
      <canvas className={styles.canvas} />
    </Card>
  )
}