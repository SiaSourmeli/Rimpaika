import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SelectedWork from './components/Selected Work';
import Exhibitions from './components/Exhibitions';
import Biography from './components/Biography';
import Contact from './components/Contact';
import Footer from './components/Footer';

import WPSGallery from './components/WPSGallery';



function App() {

  const galleryImages = [
    {
      img: "https://ucarecdn.com/6cbb2076-86ff-4f50-99bf-1c773927a53f/1untitled_200x180.jpg"
    },

    {
      img: "https://ucarecdn.com/65edf241-dcd6-4cef-8a4f-4a6b063a6857/2untitiled_205x180.jpg"
    },

    {
      img: "https://ucarecdn.com/a7fe61f6-4e28-439c-88fa-19d26ad5b81e/3untitled_400X200.jpg"
    },

    {
      img: "https://ucarecdn.com/ada478e6-31bd-415c-a53c-728691901732/4untitled_200x300.JPG"
    },

    {
      img: "https://ucarecdn.com/86c6233c-b785-4f5e-a326-b2ab14daf5c8/5untitled_180x1801.jpg"
    },
  ]

  return (

    <div>
      <Header/>
      <Home/>
      <SelectedWork/>
      {/* <WPSGallery
        galleryImages={galleryImages}
        /> */}
      <Biography/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
