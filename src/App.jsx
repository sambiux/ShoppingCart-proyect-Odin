import { useEffect, useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './styles/App.css'
import { Link } from 'react-router'
import carroLogo from './assets/carrito-de-compras.png'
import { ProductContext } from './context/productContext'

function App() {

  const [products, setProducts] = useState([])
  const {productsBuy} = useContext(ProductContext)

  
  

  return (
    <>
      <nav className="menu-nav">
        <div className='name-shop'>
          <h1>kitShop</h1>
        </div>

        <div className='seccions-container'>
          <Link to="/">Home</Link>
          <Link to="store">Store</Link>
          <div className='cart-container'>
            <Link to="cart"><img src={carroLogo} alt="" /></Link>
            <div>
              {productsBuy.length == 0 ? (
              <p></p>
            ):(
              <p>{productsBuy.length}</p>
            )}
            </div>
          </div>
        </div>
      </nav>

      <div className="products">
        
      </div>

    </>
  )
}

export default App
