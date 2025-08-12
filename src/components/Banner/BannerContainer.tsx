import React from 'react'
import { BannerCard, type BannerCardProps } from './BannerCard'
import { ContentContainer } from '../ContentContainer'

type CardProps = {
    cards: BannerCardProps[]
}

export const BannerContainer: React.FC<CardProps> = ({cards}) => {
  return (
    <ContentContainer>
        <div id="card-container">
            {
                cards && cards.length > 0 && cards.map(card => {
                    return <BannerCard
                        header={card.header}
                        description={card.description}
                        button={card.button}
                        image={card.image}
                    />
                })
            }
        </div>
    </ContentContainer>

  )
}
