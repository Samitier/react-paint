import styles from "./ColorButton.module.css"

type ColorButtonProps = {
  color: string
  onClick: () => void
}

export const ColorButton = (props: ColorButtonProps) => {
  // Fixme: accessibility, this button probably needs an aria.
  return (
    <button
      className={styles.colorButton}
      style={{ backgroundColor: props.color }}
      onClick={props.onClick}
    />
  )
}
