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
  // const fetchData = async (data) => {
  //   const results = await axios.post('.netlify/functions/helloWorld', data);
  //   
  // };

  // useEffect(() => {
  //   fetchData('hi')
  // }, []);
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="reviews" element={<Reviews/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
