import React from 'react'
import { Text } from '../Text/Text'
import { ContentContainer } from '../ContentContainer'
import { InfoCard, type InfoCardProps } from './InfoCard'
import styles from './Info.module.css'
import infoimage from '../../assets/infoimage.jpg'

type InfoProps = {
    info: InfoCardProps[]
}

export const InfoContainer: React.FC<InfoProps> = ({info}) => {
  return (
    <ContentContainer>
        <div className={styles['info-container']}>
            <div id={styles['info-image']} style={{ backgroundImage: `url(${infoimage})` }}>
                <Text variant='span'>Hello.</Text>
            </div>

            <div className={styles['menu-benefit-section']}>
                <Text variant='h4'>OUR MENU BENEFIT</Text>
                <div className={styles['menu-benefit']}>
                    {info && info.length > 0 && info.map(item => (
                        <InfoCard
                            icon={item.icon}
                            header={item.header}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>

            <div className={styles['hours']}>
                <Text variant='h4'>OPENING HOURS</Text>
                <div className={styles['hours-grid']}>
                    <div id={styles['days']}>
                        <Text variant='span'>Monday</Text>
                        <Text variant='span'>Tuesday</Text>
                        <Text variant='span'>Wednesday</Text>
                        <Text variant='span'>Thursday</Text>
                    </div>
                    <div id={styles['times']}>
                        <Text variant='span'>17:00</Text>
                        <Text variant='span'>13:00</Text>
                        <Text variant='span'>19:00</Text>
                        <Text variant='span'>13:00</Text>
                    </div>
                </div>
            </div>
        </div>
    </ContentContainer>
  )
}
