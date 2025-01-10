import React from 'react'

function Header() {
    return (
        <header className="   items-center justify-between flex  p-4">

           <a href="/">
                <h1 className=" text-3xl font-semibold">Free<span className="text-blue-700  font-normal">Scrip</span> 
                </h1>
            </a> 
            
           <a href=""> <button className="speciaBtn flex items-center gap-4 py-1 px-3">
                <p className='  '>New</p>
                <i className=" fa-solid fa-plus"></i>
            </button></a>

        </header>
    )
}

export default Header
