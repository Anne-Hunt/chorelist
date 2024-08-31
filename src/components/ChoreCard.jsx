import React from 'react'

export default function ChoreCard(props) {
    const { children, removeChore } = props

    return (
        <li className='choreItem'>
            {children}
            <div className='actionsContainer'>
                <button>
                    <i className="fa-solid fa-pen-fancy"></i>
                </button>
                <button onClick={removeChore()}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
