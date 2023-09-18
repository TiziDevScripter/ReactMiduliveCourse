// import { useState, useEffect } from 'react'
import withResults from './mocks/with-results.json'
import { Products } from './components/Products';
import { Filters } from './components/Filters';
import { Footer } from './components/Footer';
import { IS_DEVELOPMENT } from './config';
import './App.css'

import { useFilterConfig } from './hooks/useFilterConfig';
import { useCategories } from './hooks/useCategories';
import { Cart } from './components/Cart';
import { CartProvider } from './contexts/cartContext';

function App() {
  const { categories } = useCategories()
  const { filtrateProducts } = useFilterConfig()
  const productsFiltered = filtrateProducts(withResults.products)
  
  return (
    <CartProvider>
    <header className='header'>
      <Cart />
      <h1>BuySmart</h1>
    </header>
    <h2 className='subtitle'>All that you search is here</h2>
    <header className='header-filters'>
      <Filters categories={categories} />
    </header>
    <article>
      <Products products={productsFiltered} />
    </article>
    {/* {IS_DEVELOPMENT && <Footer />} */}
    </CartProvider>
  )
}

export default App
