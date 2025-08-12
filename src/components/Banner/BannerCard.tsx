import React from 'react'
import { Text } from '../Text/Text'
import styles from './Banner.module.css'

export type BannerCardProps = {
    header: string,
    description: string,
    button: string,
    image: string,
    className?: string
}

export const BannerCard: React.FC<BannerCardProps> = ({ header, description, button, image }) => {
  return (
    <div
      className={styles['banner-card']}
      style={{ backgroundImage: `url(${image})` }}
    >
      <button className={styles['signin-button']}>Sign In</button>
      <Text variant='span' style={{ padding: '0px 0px 40px 10px', fontWeight: 500 }}>Premium Restaurant</Text>
      <Text variant='h1' style={{ fontWeight: 700 }}>{header}</Text>
      <Text variant='p' style={{ fontWeight: 600 }}>{description}</Text>
      <button className={styles.button}>{button}</button>
    </div>
  )
}
