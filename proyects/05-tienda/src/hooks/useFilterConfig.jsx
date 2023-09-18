import { useContext } from 'react'
import { FiltersContext } from '../contexts/filtersContext'

export function useFilterConfig() {
    // eslint-disable-next-line no-unused-vars
    const {filters, setFilters} = useContext(FiltersContext)
    
    function filtrateProducts(products) {
      return products.filter(product => {
        return (
          product?.price >= filters.minPrice &&
          product?.price <= filters.maxPrice &&
          (
            product?.category == filters.category ||
            filters.category === "all"
          )
        )
      })
    }
    
    return { 
      filters, 
      setFilters, 
      filtrateProducts
    }
  }