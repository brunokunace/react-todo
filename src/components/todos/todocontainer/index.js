import React, {Component} from "react"

import styles from './styles.css'


import TodoMenu from '../todomenu'
import TodoList from '../todolist'

export default class TodoContainer extends Component {


  render(){
    return (
      <div className='container'>
        <TodoMenu />
        <TodoList />
      </div>
    )
  }
}