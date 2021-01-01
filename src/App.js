import './App.css';

import HomePage from './HomePage';
import { Switch, Route } from 'react-router-dom';
import Music from './Component/music/Music';
import { BrowserRouter } from 'react-router-dom';
import Project from './Component/timeline/projectTimeline/Project';
import ModuleMusic from './Component/music/musicWithModule/ModuleMusic';
import CopyMusic from './Component/music/Musiccopycode/CopyMusic'
import WeatherModuele from './Component/Weather/module/WeatherModule';
import CustomWeather from './Component/Weather/custome/CustomWeather';
import ContactForm from './Component/form/muduleform/ContactForm';
import ContactHome from './Component/form/customform/ContactHome';
import AddCustomForm from './Component/form/customform/AddCustomForm';
import EditCustomForm from './Component/form/customform/EditUser';

import ViewUser from './Component/form/customform/ViewUser';
import HomeContactModuleForm from './Component/form/muduleform/HomeContactModuleForm';
import AddModuleForm from './Component/form/muduleform/AddModuleForm';
import EditContactForm from './Component/form/muduleform/EditContactForm';
import ContactNav from './Component/form/customform/ContactNav';
import MenuInnerPage, { MenuAddPage, MenuViewPage } from './Component/menu/MenuInnerPage';
import { AddUserNav, UserNav } from './Component/menu/DesktopMenu';

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


          <Route exact path="/music" > <MenuInnerPage /> <Music /> </Route>
          <Route exact path="/project" > <Project /> </Route>
          <Route exact path="/musicupdate" > <MenuInnerPage /> <ModuleMusic />
          </Route>
          <Route exact path="/musiccopy" >
            <MenuInnerPage />
            <CopyMusic />
          </Route>
          <Route exact path="/moduleweather" >
            <MenuInnerPage />
            <WeatherModuele />
          </Route>
          <Route exact path="/customweatherr" >
            <MenuInnerPage />
            <CustomWeather />
          </Route>
          <Route exact path="/contactus" >
            <ContactForm />
          </Route>
          <Route exact path="/contacthome" ><MenuViewPage /><ContactHome /></Route>
          <Route exact path="/user/view/:id" ><MenuAddPage /><ViewUser /></Route>
          <Route exact path="/user/add" ><MenuAddPage /><AddCustomForm /></Route>
          <Route exact path="/user/edit/:id" ><MenuAddPage /><EditCustomForm /></Route>
          <Route exact path="/usermodle" ><HomeContactModuleForm /></Route>
          <Route exact path="/usermodle/add" ><AddModuleForm /></Route>
          <Route exact path="/usermodle/edit/:id" ><EditContactForm /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
