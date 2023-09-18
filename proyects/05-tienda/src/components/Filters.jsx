/* eslint-disable react/prop-types */
import { useFilterConfig } from '../hooks/useFilterConfig';
import { useId } from "react";
import './Filters.css'

export function Filters({ categories }) {
    const { filters, setFilters } = useFilterConfig()

    const filterMinId = useId()
    const filterMaxId = useId()
    const filterCategoryId = useId()
    
    function setMinFilter(event) {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event?.target?.value
        }))
    }
    function setMaxFilter(event) {
        setFilters(prevState => ({
            ...prevState,
            maxPrice: event?.target?.value
        }))
    }
    function setCateFilter(event) {
        setFilters(prevState => ({
            ...prevState,
            category: event?.target?.value
        }))
    }
    return (
        <section className='filters'>
            <article className='filter'>
                <label htmlFor={filterMinId}>Min price</label>
                <div className='input-price'>
                    <input name="minPrice" 
                    id={filterMinId} type="range" min="0" 
                    max="2000" value={filters.minPrice}
                    onChange={setMinFilter}/>
                    <span>{filters.minPrice}</span>
                </div>
            </article>

            <article className='filter'>
                <label htmlFor={filterMaxId}>Max price</label>
                <div className='input-price'>
                    <input name="maxPrice" 
                    id={filterMaxId} type="range" min="0" 
                    max="2000" value={filters.maxPrice}
                    onChange={setMaxFilter}/>
                    <span>{filters.maxPrice}</span>
                </div>
            </article>

            <article className='filter'>
                <label htmlFor={filterCategoryId}>Category</label>
                <select onChange={setCateFilter} name="category" id={filterCategoryId}>
                    {
                        categories.map((c, i) => (
                            <option key={i} name={c} id="">{c}</option>
                        ))
                    }
                </select>
            </article>
        </section>
    )
}