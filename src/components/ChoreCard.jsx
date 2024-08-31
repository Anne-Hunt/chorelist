import React from 'react'

export default function ChoreCard(props) {
    const { children, removeChore, editChore, index } = props

    return (
        <li className='choreItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => { editChore(index) }}>
                    <i className="fa-solid fa-pen-fancy"></i>
                </button>
                <button onClick={() => { removeChore(index) }}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
