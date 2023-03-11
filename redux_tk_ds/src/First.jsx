import React from 'react'
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { update } from './dataReducer';

const First = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.datareducer.a);
    console.log(value);
    const changeValue = (value) =>{
        dispatch(update(value))
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

export default React.memo(First)