import React from 'react'

import iconSearch from "../assets/icon-search.svg"
import "../styles/Searcher.css"

const Searcher = () => {
    return (
        <form className='searcher'>
            <input type="text" placeholder='Buscar ...'/>
            <button type='button'>
                <img src={iconSearch} alt="icon search" />
            </button>
        </form>
    )
}

export { Searcher }