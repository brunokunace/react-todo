import React, { Component } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.css'
import http from '/src/services/http'

import { InputCreateNewTodo, ButtonSaveNewTodo, ButtonCheckAllTodos } from '../todoinputs'
import Todo from '../todo'

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: [],
      newTodo: {
        description: ''
      }
       };
  }
  componentDidMount() {
    this.getAllTodos()
  }

  getAllTodos() {
    http.get()
      .then(({ data }) => {
        this.setState({ todos: data })
      })
  }

  newTodo() {
    if (this.state.newTodo.description == '') {
      toast.error('Você precisa escrever o nome da tarefa')
      return false
    }
    http.post('/', this.state.newTodo)
      .then(() => {
        this.getAllTodos()
        this.setState({newTodo: { description: ''}})
        toast.success('Tarefa incluída com sucesso')
      })
      .catch((err) => console.log('error', err))
  }

  changeStatusTodo(todo) {
    http.put(`/${todo.target.id}`, { done: todo.target.checked})
      .then(() => this.getAllTodos())
      .catch((err) => console.log('error', err))
  }

  doneTodo(todo) {
    http.put(`/${todo.id}`, { done: true })
      .then((res) => res)
      .catch((err) => console.log('error', err))
  }

   doneAllTodos() {
    const allTodos = this.state.todos.map((todo) => {
        this.doneTodo(todo)
        todo.done = true
      return todo
    })
    this.setState({todos: allTodos})
    toast.success('Todas as tarefas foram concluídas')
  }

  createTodo(todo) {
    this.setState({ 
      newTodo: {
        description: todo.target.value
     }
    })
  }

  render() {
    return (
      <div className='containerList'>
        <InputCreateNewTodo createTodo={this.createTodo.bind(this)} newTodo={this.state.newTodo.description}/>
        <ButtonSaveNewTodo newTodo={this.newTodo.bind(this)} />
        <div className='todolist'>
          <table>
            <colgroup>
              <col style={{ width: '25%' }} />
              <col style={{ width: '65%' }} />
              <col style={{ width: '10%' }} />
            </colgroup>  
              <thead>
                <tr>
                  <th style={{ textAlign: 'right'}}>#</th>
                  <th style={{ textAlign: 'left' }}>Tarefas</th>
                  <th style={{ textAlign: 'center' }}>(X)</th>
                </tr>
              </thead>
              <tbody>
              {this.state.todos.map((todo) => 
                <Todo 
                  key={todo.id} 
                  todo={todo} 
                  changeStatusTodo={this.changeStatusTodo.bind(this)}/> 
              )}
              </tbody>
            </table>
        </div>
        <ButtonCheckAllTodos doneAllTodos={this.doneAllTodos.bind(this)}/>
        <ToastContainer />
      </div>
    )
  }
}