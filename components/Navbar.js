import React from 'react'

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 h-[80px] shadow z-10 bg-white">
            <header className=" h-[80px] max-w-7xl flex justify-between items-center mx-auto">
                <h1>This is the logo</h1>
                <ul className="flex space-x-5">
                    <li>Donate</li>
                    <li>Directory</li>
                    <li>Exchange</li>
                    <li>Account</li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar