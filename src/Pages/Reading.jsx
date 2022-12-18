import React from 'react'
import { Link } from 'react-router-dom'
import CardPanel from '../components/CardPanel'

function Reading() {
  return (
    <>
        <h1>Reading Page</h1>
        <CardPanel/>
        <Link to="/Result" >Ir a Resultado de Lectura</Link>
    </>
  )
}

export default Reading