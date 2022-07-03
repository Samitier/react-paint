import { Icon, IconType } from '../icon/Icon'
import styles from './InputRange.module.css'

type InputRangeProps  = {
  min: number,
  max: number,
  step: number,
  iconMin: IconType,
  iconMax: IconType,
  value: number,
  onChange: (value: number) => void
}

export const InputRange = (props: InputRangeProps) => {
  // TODO: accessibility. This component lacks id, name and label.
  return (
    <div className={styles.inputRange}>
      <Icon className={styles.min} icon={props.iconMin} />
      <Icon className={styles.max} icon={props.iconMax} />
      <input
        className={styles.range}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={(e) => props.onChange(parseFloat(e.target.value))}
      />
    </div>
  )
}