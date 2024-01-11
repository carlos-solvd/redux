import { FormEvent, useState } from "react"

import { useDispatch } from "react-redux"
import { add } from '../store'

export function AddTodo() {
    const [newTodo, setNewTodo] = useState('')
    const dispatch = useDispatch()

    function hanleNewTodo(e: FormEvent) {
        e.preventDefault()

        dispatch(add({
            newTodo
        }))

        setNewTodo('')
    }

    return (
        <form onSubmit={hanleNewTodo}>
            <input type="text" placeholder="Novo to-do" value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
            <button type="submit">Adcionar</button>
        </form>
    )
}
