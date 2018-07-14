import React from 'react'
import styles from './styles.css'

const Todo = ({ todo, changeStatusTodo}) => {
  return (
    <tr>
      <td style={{ textAlign: 'right' }} className={todo.done ? 'todoDone' : ''}>Tasks {todo.id}:</td>
      <td style={{ textAlign: 'left' }} className={todo.done ? 'todoDone' : ''}>{todo.description}</td>
      <td style={{ textAlign: 'center' }}>
        <input type="checkbox" checked={todo.done} onChange={() => { }} onClick={changeStatusTodo} id={todo.id}/>
      </td>
    </tr>
  )
}

export default Todo