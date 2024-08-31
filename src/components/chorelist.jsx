import React from 'react'

export default function ChoreList() {
    let chores = ['pickup pharmacy order', 'get dog food', 'vet visit', 'wash car & vacuum']
    return (
        <ul className="main">
            {chores.map((chore, choreIndex) => {
                return (
                    <li className='ChoreItem' key={choreIndex}>
                        {chore/* <ChoreCard/> */}
                    </li>
                )
            })}
        </ul>
    )
}
