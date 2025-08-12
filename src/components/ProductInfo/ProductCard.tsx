import React from 'react'
import styles from './Product.module.css'
import { Text } from '../Text/Text'
import { ContentContainer } from '../ContentContainer'

type ProductProps = {
    header: string,
    description: string,
    button: string,
    iconImage: string,
    mainImage: string   
}

export const ProductCard: React.FC<ProductProps> = ({ header, description, button, iconImage, mainImage }) => {
  return (
    <ContentContainer>
      <div className={styles['parent-container']}>
        
        <div className={styles['product-card']}>
          <img className={styles['icon']} src={iconImage} alt={header} />
          <Text variant={'h2'} style={{ fontWeight: 700 }}>{header}</Text>
          <Text variant={'p'}>{description}</Text>
          <button className={styles['product-button']}>{button}</button>
        </div>

        <div className={styles['product-picture']}>
          <img src={mainImage} alt={header} />
        </div>
      </div>
    </ContentContainer>
  )
}
