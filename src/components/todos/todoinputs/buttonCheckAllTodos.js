import React from 'react'
import styles from './styles.css'

const ButtonCheckAllTodos = ({doneAllTodos}) => {
  return (
    <button className="checkAllTodos" onClick={doneAllTodos}>
      Marcar tudo como feito
    </button>
  )
}

export default ButtonCheckAllTodos