import { useState } from 'react';
import './App.scss';
/* #region Images */
import github from './socials/iconmonstr-github-3.svg';
import linkedin from './socials/iconmonstr-linkedin-3.svg';

// Find a way to do this in fewer lines of code
// Concept from https://www.shecodes.io/athena?tag=require.context#questions 
const Addington = require.context('./images/Addington', true);
const AddingtonArr = Addington.keys().map(image => Addington(image));
// console.log(AddingtonArr);
// Costarica
const Costarica = require.context('./images/Costarica', true);
const CostaricaArr = Costarica.keys().map(image => Costarica(image));
// Georgianbay
const Georgianbay = require.context('./images/Georgianbay', true);
const GeorgianbayArr = Georgianbay.keys().map(image => Georgianbay(image));
// Scotland
const Scotland = require.context('./images/Scotland', true);
const ScotlandArr = Scotland.keys().map(image => Scotland(image));

const fullAlbum = [...AddingtonArr, ...CostaricaArr, ...GeorgianbayArr, ...ScotlandArr];


function App() {
  const [images, setImages] = useState([...fullAlbum]); 
  const toggleMenu = () => {
    document.getElementById("menu-container").classList.toggle("change");
    document.getElementById("dropdown-menu").classList.toggle("show");    
  }

  return (
    <div className="container">
      <div id='nav'>
        <h1 onClick={() => setImages([...fullAlbum])}>Ben Langlois.</h1>
        <h4>Photography</h4>
          <div id="menu-container" class="menu-container" onClick={toggleMenu}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div id='dropdown-menu'class="dropdown-content" onClick={toggleMenu}> {/* why must it be on the parent AND the children */}
              <h3 class='link' onClick={() => setImages([...ScotlandArr])}>Scotland</h3>
              <h3 class='link' onClick={() => setImages([...GeorgianbayArr])}>Georgian Bay</h3>
              <h3 class='link' onClick={() => setImages([...AddingtonArr])}>Addington Highlands</h3>
              <h3 class='link' onClick={() => setImages([...CostaricaArr])}>Costa Rica</h3>
            </div>
        </div>
        <div id='links'>
          <h3 class='link' onClick={() => setImages([...ScotlandArr])}>Scotland</h3>
          <h3 class='link' onClick={() => setImages([...GeorgianbayArr])}>Georgian Bay</h3>
          <h3 class='link' onClick={() => setImages([...AddingtonArr])}>Addington Highlands</h3>
          <h3 class='link' onClick={() => setImages([...CostaricaArr])}>Costa Rica</h3>
        </div>
        <div id='socials'>
          <a href='https://github.com/Ben-Langlois/Photography-Portfolio'><img id='github' alt='github' src={github}/></a>
          <a href='https://www.linkedin.com/in/benjaminlanglois/'><img id='linkedin' alt='linkedin' src={linkedin}/></a>
          <h4>Nov 2023</h4>
        </div>
      </div>
      <div id='dashboard'>
      {
        images.map((image, index) => (
          <img key={index} src={image} alt='...'/> 
        ))
      }
      </div>
    </div>
  );
}

export default App;
