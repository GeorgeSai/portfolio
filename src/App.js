// function App() {
//   return (
//   <div>
//     <h1>Welcome!</h1>
//     <div className='card'>
//       <h2>This is my own personal portfolio</h2>
//       <div className='actions'>
//       <button className ='btn'>Home</button>
//       <button className ='btn'>Projec</button>
//       <button className ='btn'>Contact</button>
//       </div>
//     </div>
//   </div>
//   );
// }
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navmenu from './Components/Navmenu';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';



export default function App(){
  return (
    <>
      <Router>

      <Navmenu />
      <Switch>
        

        <Route path ="/projects">
          <Projects />
          </Route>

          <Route path ="/contact">
          <Contact />
        </Route>
        <Route path="/">
        
        <Home />
        </Route>
        
      </Switch>
      </Router>
    </>
  );
}
