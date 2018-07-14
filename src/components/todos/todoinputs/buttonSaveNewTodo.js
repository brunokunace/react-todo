import React from 'react'
import styles from './styles.css'

const ButtonSaveNewTodo = ({newTodo}) => {
  return (
    <button className="saveNewTodo" onClick={newTodo}>
      Salvar
    </button>
  )
}

export default ButtonSaveNewTodo