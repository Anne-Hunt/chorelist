import React, { useState } from "react";

export default function ChoreInput(props) {

    const { addChores, choreData, setChoreData } = props
    return (
        <header>
            <input type="text" placeholder="Add Chore ..." value={choreData} onChange={(event) => { setChoreData(event.target.value) }} />
            <button type="submit" onClick={() => { addChores(choreData), setChoreData('') }}>Add</button>
        </header>
    )
}