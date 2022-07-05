import styles from "./Card.module.css"

type CardProps = {
  children: React.ReactNode
  className?: string
}

export const Card = (props: CardProps) => {
  return (
    <section className={`${styles.card} ${props.className ?? ""}`}>
      {props.children}
    </section>
  )
}
