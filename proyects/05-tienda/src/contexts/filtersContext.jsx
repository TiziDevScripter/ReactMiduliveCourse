import { useState } from "react";
import { createContext } from "react";

export const FiltersContext = createContext()

// eslint-disable-next-line react/prop-types
export const FiltersProviders = ({children}) => {
    const [filters, setFilters] = useState({
      minPrice: 0,
      maxPrice: 2000,
      category: 'all'
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters,
        }}>
            {children}
        </FiltersContext.Provider>
    )
}