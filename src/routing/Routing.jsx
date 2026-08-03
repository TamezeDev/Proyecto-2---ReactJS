import { Routes, Route } from 'react-router-dom'
import Index from '../pages'
import Team from '../pages/Team'
import JoinForm from '../pages/JoinForm'
import About from '../pages/About'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/team" element={<Team />} />
      <Route path="/joinUs" element={<JoinForm />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Routing
