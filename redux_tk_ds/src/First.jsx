import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux'

const First = () => {
    const dispatch = useDispatch();

    const changeValue = (value) =>{
        dispatch({
            type: "update",
            a: value

        })
    }

    const [checkValue, setcheckValue] = useState('')
    const submitInput = (e) =>{
        e.preventDefault();
        changeValue(checkValue)

    }

  return (
    <>
    <div>First</div>
    <form >

    <label htmlFor='check' ></label>
    <input type='text' id='check' name='check' value={checkValue} onChange= {(e)=> setcheckValue(e.target.value)}  ></input>
    <button type='submit' onClick={(e)=> submitInput(e)} >Submit </button>
    </form>

    </>
  )
}

export default First