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
// import EditContactForm from './Component/form/muduleform/EditContactForm';
// import ContactNav from './Component/form/customform/ContactNav';
import MenuInnerPage, { MenuAddPage, MenuViewPage } from './Component/menu/MenuInnerPage';
// import { AddUserNav, UserNav } from './Component/menu/DesktopMenu';
import CommingSoon from './Component/common/CommingSoon';
import FormValidation from './Component/form/validateform/FormValidation';
import MonogValidationForm from './Component/form/mongoform/MongoValidationForm';
import ShowData from './Component/form/mongoform/ShowData';
import NewYear from './Component/page/csspage/NewYear';
import ClipPathButton from './Component/page/csspage/ClipPathButton';
import NewYearOne from './Component/page/csspage/NewYearOne';
import ButtonHover from './Component/page/csspage/ButtonHover';
import ErroPge from './Component/page/csspage/ErroPge';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* <Route path="/" component={HomePage}/> */}
          {/* or */}
          <Route exact path="/" ><HomePage /></Route>


          <Route exact path="/music" > <MenuInnerPage /> <Music /> </Route>
          <Route exact path="/project" ><MenuInnerPage /> <Project /> </Route>
          <Route exact path="/musicupdate" > <MenuInnerPage /> <ModuleMusic /></Route>
          <Route exact path="/musiccopy" ><MenuInnerPage /><CopyMusic /></Route>
          <Route exact path="/moduleweather" ><MenuInnerPage /><WeatherModuele /></Route>
          <Route exact path="/customweatherr" ><MenuInnerPage /><CustomWeather /></Route>
          <Route exact path="/contactus" ><ContactForm /></Route>
          <Route exact path="/contacthome" ><MenuViewPage /><ContactHome /></Route>
          <Route exact path="/user/view/:id" ><MenuAddPage /><ViewUser /></Route>
          <Route exact path="/user/add" ><MenuAddPage /><AddCustomForm /></Route>
          <Route exact path="/user/edit/:id" ><MenuAddPage /><EditCustomForm /></Route>
          <Route exact path="/usermodle" ><HomeContactModuleForm /></Route>
          <Route exact path="/usermodle/add" ><AddModuleForm /></Route>
          <Route exact path="/commingsoon" ><MenuAddPage /><CommingSoon /></Route>
          <Route exact path="/formValidation" ><MenuAddPage /><FormValidation /></Route>
          <Route exact path="/mongoformdata" ><MenuAddPage /><MonogValidationForm /></Route>
          <Route exact path="/mongoformdata/view" ><MenuAddPage /><ShowData /></Route>
          <Route exact path="/css/newyear" ><MenuAddPage /><NewYear /></Route>
          <Route exact path="/css/newyearone" ><MenuAddPage /><NewYearOne /></Route>
          <Route exact path="/css/clipbutton" ><MenuAddPage /><ClipPathButton /></Route>
          <Route exact path="/css/buttonhover" ><MenuAddPage /><ButtonHover /></Route>
          <Route exact path="" >< ErroPge /></Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
