import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Count = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count);

    const incr = () => {
        dispatch({
            type: 'PLUS'
        })
    }

    const decr = () => {
        dispatch({
            type: 'MINUS'
        })
    }

  return (
    <>
        <h2>{count}</h2>
        <button onClick={incr}>+</button>
        <button onClick={decr}>-</button>
    </>
  )
}

export default Count