import React from 'react'
import styles from './styles.css'

const InputCreateNewTodo = ({createTodo, newTodo}) => {
    return (
      <input
        type='text'
        className='createNewTodo'
        placeholder='Criar novo item'
        onChange={createTodo}
        value={newTodo}
      />
    )
}

export default InputCreateNewTodo
