import React, { useState, useEffect } from 'react'
import ChoreInput from './components/choreinput.jsx'
import ChoreList from './components/chorelist.jsx'

function App() {

  const [chores, setChores] = useState(['pickup pharmacy order', 'get dog food', 'vet visit', 'wash car & vacuum'])
  const [choreData, setChoreData] = useState('')

  function addChores(choreData) {
    const newChoreList = [...chores, choreData]
    setChores(newChoreList)
  }

  function editChore(index) {
    const edited = chores[index]
    setChoreData(edited)
    removeChore(index)
  }

  function removeChore(index) {
    const newChoreList = chores.filter((chore, choreIndex) => {
      return choreIndex !== index
    })
    setChores(newChoreList)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localChores = localStorage.getItem('chores')
    if (!localChores) {
      return
    }
    localChores = JSON.parse(localChores).chores
  }, [chores])

  return (
    <>
      <ChoreInput addChores={addChores} choreData={choreData} />
      <ChoreList removeChore={removeChore} editChore={editChore} setChoreData={setChoreData} chores={chores} />
    </>
  )
}

export default App
