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

//https://www.samdawson.dev/article/auto-flow-dense-varying-image-sizes
// function ImageGridItem({ image }) {
//   const style = {
//     gridColumnEnd: `span ${getSpanEstimate(image.width)}`,
//     gridRowEnd: `span ${getSpanEstimate(image.height)}`,
//   }
//   return <img style={style} src={image.url} alt={image.alt} />
// }
// function getSpanEstimate(size) {
//   if (size > 250) {
//     return 2
//   }
//   return 1
// }


function App() {
  return (
    <div className="container">
      <div id='nav'>
        <h1>Ben Langlois.</h1>
        <h4>Photography</h4>
        <div id='links'>
          <h3>GTA</h3>
          <h3>Georgian Bay</h3>
          <h3>Addington Highlands</h3>
          <h3>Costa Rica</h3>
        </div>
        <div id='socials'>
          <a href='https://github.com/Ben-Langlois/Photography-Portfolio'><img id='github' alt='github' src={github}/></a>
          <a href='https://www.linkedin.com/in/benjaminlanglois/'><img id='linkedin' alt='linkedin' src={linkedin}/></a>
          <h4>Nov 2023</h4>
        </div>
      </div>
      <div id='dashboard'>
      {
        AddingtonArr.map((image, index) => (
          <img key={index} src={image} alt='...'/> 
        ))
      }
      </div>
    </div>
  );
}

export default App;
