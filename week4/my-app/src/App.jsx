import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// To create a new component: function MyComponent() { return <div>My Component</div> }
//The goal is to return some HTML Code!
//The idea is to start from App aned modify it to create new components
//To run:
//cd my-app, then npm install, then npm run dev
//always put the node modules in the gitignore file

//import componente Welcome
import Welcome from './components/Welcome'


function App() {
  const [count, setCount] = useState(0)

  return <div>
    <h1>Forza Toro</h1>
    <Welcome lang="it" unused_property = "this is an unused property of Welcome!"/>
    {/* <Welcome lang="es" unused_property = "this is an unused property of Welcome!"/> */}
  </div>
}

// <Welcome lang="es" boolean_property={true} explanation ="always use braces for js objects"  numeric_property={7}/>

export default App
