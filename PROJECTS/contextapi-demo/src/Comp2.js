import React, { useContext } from 'react'
import AppContext from './AppContext'
import Comp3 from './Comp3';
export default function Comp2() {
    const { state, dispatch } = useContext(AppContext);
    return (
        <div>
            <ul>
                {
                    state.map(item => <li>{item} <button onClick={() => dispatch({ type: 'REMOVE', payload: item })}>X</button></li>)
                }
            </ul>
            <Comp3 />
        </div>
    )
}
