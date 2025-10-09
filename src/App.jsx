import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Form from './pages/Form'

function App() {
    return (
        <BrowserRouter>
            <nav className='flex justify-between'>
                <button><Link to={'/form'}>Adicionar notas</Link></button>
            </nav>

            {/* Rotas */}
            <div>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/form' element={<Form/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
