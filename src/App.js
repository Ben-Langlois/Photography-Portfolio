import './App.scss';

// Images
import github from './socials/iconmonstr-github-3.svg';
import linkedin from './socials/iconmonstr-linkedin-3.svg';

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
          <a href='https://github.com/Ben-Langlois/Photography-Portfolio'><img id='github' src={github}/></a>
          <a href='https://www.linkedin.com/in/benjaminlanglois/'><img id='linkedin' src={linkedin}/></a>
          <h4>Nov 2023</h4>
        </div>
      </div>
      <div id='dashboard'>
        
      </div>
    </div>
  );
}

export default App;
