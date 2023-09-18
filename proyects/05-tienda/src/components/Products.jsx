import { useCart } from '../hooks/useCart'
import './products.css'
// eslint-disable-next-line react/prop-types
export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()
  return (
        <ul className='products'>
          {
            // eslint-disable-next-line react/prop-types
            products.map(product => {
              const isProductInCart = cart.some(item => item.id === product.id)
              
              return (
                <li  className='product' key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <h3>{ product.title } - <span><mark>${ product.price}</mark></span></h3>
                  
                  <button onClick={() => {isProductInCart ? removeFromCart(product) : addToCart(product)}}>
                    {
                    isProductInCart 
                    ? 'REMOVE TO CART'
                    : 'ADD TO CART'
                  }
                  </button>
                </li>
            )})
          }
        </ul>
    )
}