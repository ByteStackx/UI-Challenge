import { Text } from '../Text/Text'
import { ContentContainer } from '../ContentContainer'
import styles from './Navbar.module.css'
import logo from '../../assets/icons8-pineapple-64.png'
import profile from '../../assets/icons8-customer-100.png'
import cart from '../../assets/icons8-cart-96 (1).png'


export const Navbar = () => {
  return (
    <nav>
        <ContentContainer className={styles.content}>
            <div className={styles.logo}>
                <div id={styles.icon}>
                    <img src={logo} alt="Logo"/>
                </div>
                <div id={styles.wordmark}>
                    <Text>Parley</Text>
                </div>
            </div>
            <div className={styles.links}>
                <a href="/#" className={styles.link}>HOME</a>
                <a href="/#" className={styles.link}>MENU</a>
                <a href="/#" className={styles.link}>PAGES</a>
                <a href="/#" className={styles.link}>BLOG</a>
                <a href="/#" className={styles.link}>CONTACT US</a>
            </div>
            <div className={styles['navbar-icons']}>
                <div className={styles.icons}>
                    <img src={profile} alt=""/>
                </div>
                <div className={styles.icons}>
                    <img src={cart} alt=""/>
                </div>
                
            </div>
        </ContentContainer>
    </nav>
  )
}
