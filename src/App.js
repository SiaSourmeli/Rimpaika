import './App.css';
import Header from './components/header/Header';
import Home from './components/hero/Hero';
import SelectedWork from './components/Selected Work';
import Exhibitions from './components/Exhibitions';
import Biography from './components/biography/Biography';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <SelectedWork/>
      <Exhibitions />
      <Biography/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
