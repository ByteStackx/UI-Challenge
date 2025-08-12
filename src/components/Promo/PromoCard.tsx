import { Text } from '../Text/Text'
import styles from './Promo.module.css'
import promoitem1 from '../../assets/promoitem1.jpg'

export const PromoCard= () => {
  return (
    <div className={styles['promo-container']}>
        <div className={styles['promo-card']}>
            <Text variant='p'>Just imagine seeds and summer in full sunshine</Text>  
        </div>
        <div className={styles['promo-card']}>
            <img className={styles['promo-image']} src={promoitem1}></img>
        </div>
        <div className={styles['promo-card-unique']}>
                <Text variant='h4'>Some Text To Show</Text>
                <Text variant='span'>Another example to just show</Text>
                <button>LEARN MORE</button>
        </div>
        
    </div>
  )
}
  