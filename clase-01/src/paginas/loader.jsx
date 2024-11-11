import React from 'react'
import { useState } from 'react'

function loader() {
const {load,setLoad}=useState(true)

  return (
    <div>
        <div> {load ? "Esta Cargando..." : ""} </div>
    </div>
  )
}

export default loader
