import reactLogo from './assets/react.svg'
import './App.css'
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="App">
    <img src={reactLogo}/>
    <h2>Buscador de CEP</h2>
    <Formulario/>
    <h4></h4>
  </div>
  )
}

export default App
