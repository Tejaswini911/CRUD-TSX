import "./App.css";
import {  Route,  Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import AddEdit from "./components/AddEdit";
import MobileList from "./components/MobileList";
import MobileProvider from "./components/model/MobileContext";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Auth from "./components/Auth";


function App() {
  
  return (
    <div className="App">
      
      <MobileProvider>
      
        <Routes>
          <Route path="/" element={<Auth/>}>
          <Route path="sign-up" element={<Register />}></Route>
          <Route path="login"  element={<Login />}></Route>
          </Route>
         
          <Route path="/home" element={<Home />}>
            <Route path="mobile-list" element={<MobileList/>}> </Route>
            <Route path="edit/:model" element={<AddEdit/>}></Route>
            <Route path="add" element={<AddEdit/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="view/:model" element={<Search/>}></Route>
          </Route>
          
        </Routes>
   
      </MobileProvider>
    </div>
  );
}

export default App;
