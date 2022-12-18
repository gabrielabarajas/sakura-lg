import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/Reading" >Ir a Selección de cartas </Link>
    </>
  )
}

export default Home