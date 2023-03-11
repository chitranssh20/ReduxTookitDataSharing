import React from 'react'
import { useSelector } from 'react-redux'

const Second = () => {

    const value = useSelector(state=>state.datareducer.a)
  return (
    <>
    <div>Second</div>
    <h2>Value of a is {value}</h2>
    </>
  )
}

export default Second