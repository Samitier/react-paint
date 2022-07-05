import { Icon, IconType } from "../icon/Icon"
import styles from "./Button.module.css"

type ButtonProps = {
  icon?: IconType
  text?: string
  isSelected?: boolean
  onClick: () => void
}

export const Button = (props: ButtonProps) => {
  // FIXME: accessibility. Missing aria for buttons with icons
  return (
    <button
      className={`${styles.button} ${props.isSelected ? styles.selected : ""}`}
      onClick={props.onClick}
    >
      {props.icon ? (
        <Icon
          className={props.isSelected ? styles.selectedIcon : ""}
          icon={props.icon}
        />
      ) : (
        props.text
      )}
    </button>
  )
}
