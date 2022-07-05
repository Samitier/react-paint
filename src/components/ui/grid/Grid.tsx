import styles from "./Grid.module.css"

type GridProps = {
  columns: number
  children: React.ReactNode
}

export const Grid = (props: GridProps) => {
  const gridTemplateColumns = `repeat(${props.columns}, 1fr)`

  // Fixme: we should try to avoid "div soup".
  return (
    <div className={styles.grid} style={{ gridTemplateColumns }}>
      {props.children}
    </div>
  )
}
