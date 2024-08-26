import './App.css'
import './bootstrap.min.css'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
import History from './assets/pages/History'
import Home from './assets/pages/Home'
import Landing from './assets/pages/Landing'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/his' element={<History/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
