import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Functional_Components from './Components/Task-1/Functional_Components'
import Class_Component from './Components/Task-2/Class_Component'
import UserCard from './State_&_Props/Task-1/UserCard'
import Counter_Component from './State_&_Props/Task-2/Counter_Component'

function App() {
  const user = {
      name : "Siddhraj Parmar",
      age : 23,
      location : "Rajkot Gujarat India"
  }

  return (
    <>
      <Functional_Components name="Siddhraj Parmar" />
      <Class_Component />
      <UserCard name={user.name} age={user.age} location={user.location}/>
      <Counter_Component />
    </>
  )
}

export default App
