import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Google from './pages/Reviews.jsx'
import MainLayout from './layout/MainLayout.jsx'
import Reviews from './pages/Reviews.jsx'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Routes>
  )
}

export default App
