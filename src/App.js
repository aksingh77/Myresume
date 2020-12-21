import './App.css';

import HomePage from './HomePage';
import { Switch, Route } from 'react-router-dom';
import Music from './Component/music/Music';
import { BrowserRouter } from 'react-router-dom';
import Project from './Component/timeline/projectTimeline/Project';
import ModuleMusic from './Component/music/musicWithModule/ModuleMusic';
import CopyMusic from './Component/music/Musiccopycode/CopyMusic'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={HomePage}/> */}
          {/* or */}
          <Route exact path="/" >
            <HomePage />
          </Route>


          <Route exact path="/music" >
            <Music />
          </Route>
          <Route exact path="/project" >
            <Project />
          </Route>
          <Route exact path="/musicupdate" >
            <ModuleMusic />
          </Route>
          <Route exact path="/musiccopy" >
            <CopyMusic />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
