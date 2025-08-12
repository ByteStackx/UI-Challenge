import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import oranges from './assets/oranges.jpg'    
import juice from './assets/juice.jpg'
import orangeCutout from './assets/orangecut.png'
import menuitem1 from './assets/menuitem1.jpg'
import menuitem2 from './assets/menuitem2.jpg'
import menuitem3 from './assets/menuitem3.jpg'
import leaficon from './assets/leaficon.png'
import onionincon from './assets/onionicon.png'
import cupicon from './assets/cupicon.png'
import { BannerContainer } from './components/Banner/BannerContainer'
import { ProductCard } from './components/ProductInfo/ProductCard'
import { MenuContainer } from './components/Menu/MenuContainer'
import { PromoCard } from './components/Promo/PromoCard'
import { InfoContainer } from './components/Info/InfoContainer'

function App() {
  const [card, _setCard] = useState([
    {
      header: <>Anida <br /> Dedelay</>,
      description: <>BEST HEALTHY SALAD SERVED <br />IN OUR RESTAURANT</>,
      button: "Learn more",
      image: oranges
    }
  ])

  const [menu, _setMenu] = useState([
    {
      image: menuitem1,
      name: "A TASTE CITRUS FRUIT",
      description: "Three oranges"
    },
    {
      image: menuitem2,
      name: "A REFRESHING TASTE",
      description: "Another oranges"
    },
    {
      image: menuitem3,
      name: "A CRUNCHY GOODIE BOWL",
      description: "Nuts & fruits"
    }
  ])

  const [info, _setInfo] = useState([
    {
      icon: leaficon,
      header: "FRESH",
      text: "Healthy taste"
    },
    {
      icon: onionincon,
      header: "VITAMIN",
      text: "Nutrition packed"
    },
    {
      icon: cupicon,
      header: "ORGANIC",
      text: "Grown Naturally"
    }
  ])

  return (
    <div id='app-container'>
      <Navbar/>
      <div id='scrollable'>
        
        <BannerContainer cards={card} />
        <ProductCard
          header="Orange Benefit"
          description="Just imagine seeds and summer is a golden sip"
          button="Learn More"
          iconImage={orangeCutout} 
          mainImage={juice}
        />
        <MenuContainer fullMenu={menu}/>
        <PromoCard />
        <InfoContainer info={info} />
      </div>
    </div>
  )
}

export default App
