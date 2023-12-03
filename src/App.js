import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SelectedWork from './components/Selected Work';
import Biography from './components/Biography';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <SelectedWork/>
      <Biography/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
