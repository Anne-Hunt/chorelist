import React from 'react'

export default function ChoreCard(props) {
    const { children } = props
    return (
        <li className='choreItem'>
            {children}
            <div>
                <i className="fa-solid fa-pen-fancy"></i>
                <i className="fa-solid fa-trash-can"></i>
            </div>
        </li>
    )
}
