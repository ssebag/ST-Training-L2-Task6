import {Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/pages/Home'
import Information from './components/pages/Information'
function App() {
  return (
    <div >
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Information />} />
     </Routes>
    </div>
  )
}

export default App
