import reactLogo from './assets/react.svg'
import './App.css'
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="App">
      <img src={reactLogo} width='80px'/>
      <h2>Buscador de CEP</h2>
      <Formulario/>
      <h6></h6>
    </div>
  )}
export default App
