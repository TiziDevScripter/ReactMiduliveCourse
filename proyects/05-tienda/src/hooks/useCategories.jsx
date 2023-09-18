import { useState, useEffect } from "react"

export function useCategories() {
    const [categories, setCategories] = useState(['all'])
    
    useEffect(() => {
      fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(data => setCategories([...categories, ...data]))
    }, [])
  
    return { categories }
  }