import { useState } from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'

import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Hero />
      <Demo />
      <Footer />
    </div>
  
      
  )
}

export default App
