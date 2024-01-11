import { FormEvent, useState } from "react"

export function AddTodo() {
    const [newTodo, setNewTodo] = useState('')

    function hanleNewTodo(e: FormEvent) {
        e.preventDefault()

        console.log(newTodo)
    }

    return (
        <form onSubmit={hanleNewTodo}>
            <input type="text" placeholder="Novo to-do" value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
            <button type="submit">Adcionar</button>
        </form>
    )
}
