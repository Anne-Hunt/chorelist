import React from 'react'
import ChoreCard from './ChoreCard.jsx'

export default function ChoreList(props) {
    // let chores = ['pickup pharmacy order', 'get dog food', 'vet visit', 'wash car & vacuum']
    const { chores } = props

    return (
        <ul className="main">
            {chores.map((chore, choreIndex) => {
                return (
                    <ChoreCard {...props} key={choreIndex}>
                        <p>{chore}</p>
                    </ChoreCard>
                )
            })}
        </ul>
    )
}
