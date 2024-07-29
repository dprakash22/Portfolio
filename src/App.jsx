import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Photo from './components/Photo.jsx';
import Portfolio from './components/Portfolio.jsx';
import Name from './components/Name.jsx';
import About from './pages/About.jsx';
import Header from './components/Header.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Name />} />
        <Route path='/home' element={<Portfolio />} />
        <Route path='/about' element={ <><About /> <Header /></> } />
        <Route path='/skills' element={ <> <Header /><Skills /></> } />
        <Route path='/projects' element={ <> <Header /><Projects /></> } />
        <Route path='/contact' element={ <> <Header /><Contact /></> } />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App