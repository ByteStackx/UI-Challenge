import React from 'react'
import { Text } from '../../components/Text/Text'
import styles from './Menu.module.css'

export type MenuItemProp = {
    image: string,
    name: string,
    description: string

}
export const MenuItem: React.FC<MenuItemProp> = ({image, name, description}) => {
  return (
    <article className={styles['menu-card']}>
        <img className={styles['menu-image']} src={image} alt="" />
        <Text variant='h3'>{name}</Text>
        <Text variant='span'>{description}</Text>
    </article>  
  )
}
