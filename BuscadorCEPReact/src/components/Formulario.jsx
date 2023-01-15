import axios from 'axios'
function Formulario() {
  function formsub(e){
    e.preventDefault()
    const cep = document.getElementById('CEP').value
    const resposta=document.querySelector('h4')
    if(cep.length!=8){
      resposta.innerText='CEP Inválido'
      return
    }else{
    console.log(cep)
    axios.get(`http://viacep.com.br/ws/${cep}/json/`)
      .then(res => {
        console.log(res.data.logradouro)
        console.log(res.data.bairro)
        console.log(res.data.localidade)
        console.log(res.data.uf)
        resposta.innerText=`Rua/Estrada/Avenida: ${res.data.logradouro}
        Bairro: ${res.data.bairro}
        Cidade: ${res.data.localidade}
        Estado: ${res.data.uf}`
      })
    }
  }
  return (
    <>
      <form onSubmit={formsub}>
        <label>CEP:</label>
        <input type="text" id="CEP"/>
        <button type='submit'>Verificar</button>
      </form>
    </>
  )
}
export default Formulario