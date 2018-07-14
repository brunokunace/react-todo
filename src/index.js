import React, { Component } from 'react'
import { render } from 'react-dom'
import TodoContainer from './components/todos/todocontainer'

class App extends Component {
  render() {
    return (
        <TodoContainer />
    )
  }
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
