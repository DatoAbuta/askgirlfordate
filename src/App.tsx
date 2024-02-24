import { Route, Routes } from 'react-router-dom'
import './App.css'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<FirstPage />}/>
      <Route path='/secondpage' element={<SecondPage />}/>
    </Routes>
    </>
  )
}

export default App
