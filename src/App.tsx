import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import CreatePage from './pages/CreatePage'

function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreatePage />} /> 
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
