/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCart } from '../hooks/useCart'
import { useFilterConfig } from '../hooks/useFilterConfig'
import './Footer.css'
export function Footer() {
    const { filters } = useFilterConfig()
    const { cart } = useCart()
    return (
        <footer>
            {/* <p>minPrice: {filterState?.minPrice}</p>
            <p>maxPrice: {filterState?.maxPrice}</p>
            <p>category: {filterState?.category}</p> */}
            <p>
                {
                    JSON.stringify(cart)
                }
            </p>
        </footer>
    )
}