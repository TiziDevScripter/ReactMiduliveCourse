import { useId } from "react"
import cartLogo from "../assets/cart.svg"
import "./Cart.css"
import { useCart } from "../hooks/useCart"

export function Cart() {
    const checkboxId = useId()

    const {
        cart, 
        addToCart, 
        removeFromCart, 
        takeOutOneFromCart 
    }  = useCart();
    
    return (
        <section className="cart">
            <label className="cart-logo" htmlFor={checkboxId} >
                <img src={cartLogo} alt="cart-icon" />
            </label>
            
            <input id={checkboxId} type="checkbox" hidden />
            
            <ul className="products">
                {
                cart.length > 0 
                ?   cart.map(product => {
                    return (
                        <li className="product" key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div className="title-price">
                                <h3>{product.title}</h3>
                                <h3>${product.price * product.quantity}</h3>
                            </div>
                            <div className="quantity">
                                Qty: {product.quantity}
                                <button onClick={() => takeOutOneFromCart(product)}>-</button>
                                <button onClick={() => addToCart(product)}>+</button>
                            </div>
                            <button className="button-remove" 
                            onClick={() => removeFromCart(product)} >Remove From Cart</button>
                        </li>
                    )})
                : <span>No Products</span>
                }
                {/* <li className="product">
                    <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="phone" />
                    <div className="title-price">
                        <h3>Phone</h3>
                        <h3>$500</h3>
                    </div>
                    <div className="quantity">
                        Qty: 1 
                        <button>-</button>
                        <button>+</button>
                    </div>
                    <button className="button-remove">Remove From Cart</button>
                </li> */}
            </ul>
        </section>
    )
}