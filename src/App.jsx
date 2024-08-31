import React, { useState } from 'react'
import ChoreInput from './components/choreinput.jsx'
import ChoreList from './components/chorelist.jsx'

function App() {

  const [chores, setChores] = useState(['pickup pharmacy order', 'get dog food', 'vet visit', 'wash car & vacuum'])

  function addChores(choreData) {
    const newChoreList = [...chores, choreData]
    setChores(newChoreList)
  }

  return (
    <>
      <ChoreInput addChores={addChores} />
      <ChoreList chores={chores} />
    </>
  )
}

export default App
