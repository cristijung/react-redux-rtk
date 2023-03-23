import { Counter } from './features/counter/Counter'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Text } from './components/Text'

function App() {
  return (
    <div className="App">
      <Header/>      
      <Text/>        
        <Counter />
        <br/>    
      <Footer/>
    </div>
  )
}
export default App
