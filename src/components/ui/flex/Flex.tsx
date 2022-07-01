import styles from './Flex.module.css'

type FlexProps = {
  children: React.ReactNode
  verticalAlign?: 'center',
  justify?: 'center'
  className?: string,
}


export const Flex = (props: FlexProps) => {
  const classNames = [styles.flex]
  if (props.className) {
    classNames.push(props.className)
  }
  if (props.verticalAlign === 'center') {
    classNames.push(styles.center)
  }
  if (props.justify === 'center') {
    classNames.push(styles.justifyCenter)
  }
  // Fixme: we should try to avoid "div soup".
  return (
    <div 
      className={classNames.join(' ')}
    >
      { props.children }
    </div>
  )
}