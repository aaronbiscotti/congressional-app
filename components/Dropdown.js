import React, { useState } from 'react'

const Dropdown = (props) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <button className={`relative grow flex justify-between p-2 items-center bg-white text-black rounded text-sm w-[${props.maxW}pxs] font-bold`} onClick={() => setOpen(!isOpen)}>
            <h1>{props.title}</h1>
            {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="6 15 12 9 18 15"></polyline>
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>}
            {isOpen && <ul className="block space-y-2 absolute bg-white rounded -right-10 p-2 top-12 left-0">
                <li>Donate</li>
                <li>Receive</li>
            </ul>}
        </button>
    )
}

export default Dropdown