import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { SalePage } from './pages/Sale'
import { CoursePage } from './pages/Course'
import { NotFoundPage } from './pages/NotFound'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='sale' element={<SalePage />} />
        <Route path='course' element={<CoursePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
