// import logo from './logo.svg';
import "./index.css";
//import Header from "./Components/FirstPage/Header";
//import FirstSection from "./Components/FirstPage/FirstSection";
//import SecondSection from "./Components/FirstPage/SecondSection";
// import AboutusSection from "./Components/FirstPage/AboutusSection";
// import LastSection from "./Components/FirstPage/LastSection";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
//Second Section
import SecondHeader from "./Components/SecondPage/SecondHeader";
import FirstSection2 from "./Components/SecondPage/FirstSection2";
import SecondSection2 from "./Components/SecondPage/SeondSection2";
import ProfileAccount2 from  "./Components/ProfileAccount/ProfileAccount2";
// first section new version
import FirstSection from "./Components/FirstPage/FirstSection";
import SecondSection from "./Components/FirstPage/SecondSection";
import ThirdSection from "./Components/FirstPage/ThirdSection";
import ForthSection from "./Components/FirstPage/ForthSection";
import Singup from "./Components/Singup";
import AnnonceDD from "./Components/AnnonceDD/AnnonceDD";
import PrincipalFooter from './Components/FirstPage/PrincipalFooter'
import AnnonoceHeader from "./Components/Annoncepage1/AnnonoceHeader";
import AnnoncePSection1 from "./Components/Annoncepage1/AnnoncePSection1";
import AnnoncesScreen from "./Components/Annoncepage1/AnnoncesScreen";
import ListUsers from  "./Components/Annoncepage1/ListUsers";
import AddAnnonce from "./Components/AddAnnonce/AddAnnonce";

import ProfileAccount from "./Components/ProfileAccount/ProfileAccount";
import CardAnnonce from "./Components/SecondPage/CardAnnonce";
import UserBar from "./Components/Annoncepage1/UserBar";
import ListMessages from "./Components/Annoncepage1/ListMessages";
import AnnoncesScreen2 from "./Components/Annoncepage1/AnnoncesScreen2";
import Msglist from "./Components/Annoncepage1/Msglist";
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/signup" element={<Singup/>}/>
          <Route exact path="/annonces" element={<Home/>}/>
          <Route exact path='/contactuser/:annance_id' element={ <div><SecondHeader/><FirstSection2/><SecondSection2/></div> }/>
          <Route exact path='/:search/:titre' element={ <div><AnnonoceHeader/><AnnoncePSection1/><AnnoncesScreen/> <PrincipalFooter/></div> }/>
          <Route exact path='/:wilaya/:titre' element={ <div><AnnonoceHeader/><AnnoncePSection1/><AnnoncesScreen/> <PrincipalFooter/></div> }/>
          <Route exact path='/:commune/:titre' element={ <div><AnnonoceHeader/><AnnoncePSection1/><AnnoncesScreen/> <PrincipalFooter/></div> }/>
          <Route exact path='/:type/:titre' element={ <div><AnnonoceHeader/><AnnoncePSection1/><AnnoncesScreen/> <PrincipalFooter/></div> }/>
           <Route exact path='/:periode/:titre' element={ <div><AnnonoceHeader/><AnnoncePSection1/><AnnoncesScreen/> <PrincipalFooter/></div> }/>
          <Route exact path="/:annonce" element = {<div><AnnonoceHeader/><AnnoncePSection1/><AnnoncesScreen/> <PrincipalFooter/></div>}/>
          <Route exact path="" element ={<div><FirstSection /><SecondSection /><ThirdSection /><ForthSection /></div>}/>
           <Route exact path ="/userannonce" element = {<><AnnonceDD/></>}/>
           <Route exact path="/MonCompte" element={ <div><ProfileAccount2/></div>} /> 
           <Route exact path="/ListUsers" element={ <div><ListUsers/></div>} /> 
           <Route exact path="/ListMessages" element={ <div><ListMessages/></div>} />   
         <Route exact path="/profile" element={<ProfileAccount/>}/>
          <Route exact path="/addannonce" element = {<AddAnnonce/>}/>
          <Route exact path="/Msglist" element = {<Msglist/>}/>
          <Route exact path="/MyAnnonces" element = {<div><SecondHeader /><AnnoncesScreen2/></div>}/>
        
          
          
        </Routes>
      </BrowserRouter>




       
    </div>
  );
}

export default App;
