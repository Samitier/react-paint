import React, { useState, useEffect } from "react"
import styles from './Icon.module.css'

export enum IconType {
  add = 'add',
  delete = 'delete',
  eraser = 'eraser',
  bucket = 'paint-bucket',
  pencil = 'pencil',
  shape = 'shape',
  undo = 'undo',
  redo = 'redo',
}

type IconProps = {
  icon: IconType
}

export const Icon = (props: IconProps) => {

  const [iconSrc, setIconSrc] = useState('')

  useEffect(() => {
    async function fetchImage() {
      const imageSrc = await import(`../../../assets/icons/${props.icon}.svg`)
      setIconSrc(imageSrc.default)
    }
    fetchImage()
  }, [iconSrc, props.icon])
  
  if (iconSrc) return <img className={styles.icon} src={iconSrc} alt={props.icon} />
  return <React.Fragment />
}
