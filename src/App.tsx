// importa os componentes e o modulo de css
import './styles/App.css'
import Clima from './components/Clima';

function App() {
  
  return (
    <>
      {/* define  o titulo e chama o elemento principal*/}
      <h1 className='title'>Buscar Clima</h1>
      <Clima />
    </>
  )
}

export default App
