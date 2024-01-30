import {Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/pages/Home'
import Information from './components/pages/Information'
import MainLayout from './components/MainLayout/MainLayout'
function App() {
  return (
    <div >
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
         {/*  <Route path="/:id" element={<Information />} /> */}
      </Routes>
      </MainLayout>
    </div>
  )
}

export default App
