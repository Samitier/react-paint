import styles from './InputRange.module.css'

type InputRangeProps  = {
  min: number,
  max: number,
  step: number,
  iconMin: string,
  iconMax: string,
  value: number,
  onChange: (value: number) => void
}

export const InputRange = (props: InputRangeProps) => {
  // TODO: accessibility. This component lacks id, name and label.
  return (
    <input
      className={styles.inputRange}
      type="range"
      min={props.min}
      max={props.max}
      step={props.step}
      value={props.value}
      onChange={(e) => props.onChange(parseFloat(e.target.value))}
    />
  )
}