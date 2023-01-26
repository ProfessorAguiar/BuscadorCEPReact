import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Formulario() {
  function formSub(e) {
    e.preventDefault()
    const cep = document.getElementById('CEP').value
    const resposta = document.querySelector('h6')
    if (cep.length != 8) {
      resposta.innerText = 'CEP Inválido'
      return
    } else {
      console.log(cep)
      axios.get(`http://viacep.com.br/ws/${cep}/json/`)
        .then(res => {
          console.log(res.data.logradouro)
          console.log(res.data.bairro)
          console.log(res.data.localidade)
          console.log(res.data.uf)
          resposta.innerText = `Endereço: ${res.data.logradouro}
        Bairro: ${res.data.bairro}
        Cidade: ${res.data.localidade}
        Estado: ${res.data.uf}`
        })
    }
  }

  function formReset() {
    const resposta = document.querySelector('h6')
    resposta.innerText = ''
  }

  return (
    <>
      <div className='container-lg'>
        <Form onSubmit={formSub} onReset={formReset}>
          <Form.Control type="text" placeholder="Insira seu CEP" id='CEP' />
          <Form.Text className="text-muted">
            Entre com o CEP a ser consultado.
          </Form.Text>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" type='submit'>
              Buscar CEP
            </Button>
            <Button variant="secondary" size="lg" type='reset'>
              Limpar
            </Button>
          </div>
        </Form>
        <br />
      </div>
    </>
  )
}
export default Formulario