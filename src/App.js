
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Profil from './Components/Profil';
import Informations from './Components/Informations';
import Formations from './Components/Formations';
import Certifications from './Components/Certifications';
import Projects from './Components/Projects';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import './Style/App.css';
function App() {
  <>
  <link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'></link>
  <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet'></link>
  <link href='https://fonts.googleapis.com/css?family=Actor' rel='stylesheet'></link>
  <link href='https://fonts.googleapis.com/css?family=Allan' rel='stylesheet'></link>
  </>
  return (
   
    <BrowserRouter>
      <div className='app'>
      <Profil/>
      <Menu/>
    
     
      <Routes>

        <Route path='/' element={<Informations/>}/>
        
        

        <Route path='/Projects' element={<Projects/>}/>

        <Route path='/Formations' element={<Formations/>}/>

        <Route path='/Certifications' element={<Certifications/>}/>
      
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
