import React from 'react'
import { ContentContainer } from '../ContentContainer'
import { MenuItem, type MenuItemProp } from './MenuItem'
import styles from './Menu.module.css'

type MenuProps = {
    fullMenu: MenuItemProp[]
}

export const MenuContainer: React.FC<MenuProps> = ({fullMenu}) => {
  return (
    <ContentContainer>
        <div className={styles['menu-container']}>
            {
                fullMenu && fullMenu.length > 0 && fullMenu.map(item => {
                    return <MenuItem 
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    />
                })
            }
        </div>
    </ContentContainer>
  )
}
