
import { Component } from 'react'

class App extends Component {

  constructor() {
    super()
    console.log('Soy el CONSTRUCTOR y me ejecuto en primer lugar')
  }

  componentDidMount() {
    console.log('Soy el COMPONENTDIDMOUNT y me ejecuto cuando ya está montado el DOM')
  }

  render() {
    console.log('Soy el RENDER y me ejecuto en segundo lugar')
    return <h1>Mira la consola :3</h1>
  }
}

export default App;
