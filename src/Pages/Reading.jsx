import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function Reading() {
  return (
    <>
        <h1>Reading Page</h1>
        <Card/>
        <Link to="/Result" >Ir a Resultado de Lectura</Link>
    </>
  )
}

export default Reading