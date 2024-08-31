import React, { useState } from "react";

export default function ChoreInput(props) {

    const { addChores } = props
    const [choreData, setChoreData] = useState('')
    return (
        <header>
            <input type="text" placeholder="Add Chore ..." value={choreData} onChange={(event) => { setChoreData(event.target.value) }} />
            <button type="submit" onClick={() => { addChores(choreData) }}>Add</button>
        </header>
    )
}