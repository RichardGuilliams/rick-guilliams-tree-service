import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Services from './pages/services';
import Reviews from './pages/reviews';
import  Header from './components/Header';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
