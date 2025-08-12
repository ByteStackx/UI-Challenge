import React from 'react'
import { Text } from '../Text/Text'
import styles from './Info.module.css'

export type InfoCardProps = {
    icon: string,
    header: string,
    text: string
}

export const InfoCard: React.FC<InfoCardProps> = ({icon, header, text}) => {
  return (
    <article className={styles['info-card']}>
        <img className={styles['info-icon']} src={icon}></img>
        <Text variant='h5'>{header}</Text>
        <Text variant='span'>{text}</Text>
    </article>
  )
}
