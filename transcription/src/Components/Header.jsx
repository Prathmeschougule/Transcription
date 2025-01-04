import React from 'react'

function Header() {
    return (
        <header className=" border border-b-gray-700  items-center justify-between flex  p-4">

            <h1 className=" text-3xl font-semibold">Free<span className="text-blue-700  font-normal">Scrip</span> </h1>
            <button className="speciaBtn flex items-center gap-4 py-1 px-3">
                <p className='  '>New</p>
                <i className=" fa-solid fa-plus"></i>
            </button>

        </header>
    )
}

export default Header
