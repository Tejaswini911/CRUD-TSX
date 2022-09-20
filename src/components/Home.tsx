
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { contextType, Mobile } from "./model/Mobile";
import { MobileContext } from "./model/MobileContext";
import Sidebar from "./Sidebar";



function Home() {
const navigate = useNavigate();
const [searchedMobile, setSearchedMobile] = React.useState<string>()
const [mobileList, setMobileList] = React.useState<Mobile[]>();
const {mobiles} = React.useContext(MobileContext) as contextType;

React.useEffect(()=>{
  setMobileList(mobiles)
}, [mobiles]);

const search = (event:any) => {
    event.preventDefault();
    navigate('view/'+searchedMobile);
    setSearchedMobile('');
  };

  const filter = (e:React.ChangeEvent<HTMLInputElement>) => {
    
     const keyword = e.target.value;
     if (keyword !== "") {
       const results = mobileList?.filter((mobile) => {
         return mobile.model.toLowerCase().startsWith(keyword.toLowerCase());
       });
       setMobileList(results);
     } else {
       setMobileList(mobiles);
     }
 
     setSearchedMobile(keyword);
   };
 

  return (
    <>
  
    {/* <header className="header">
        <h1 className="title">Mobile Database</h1>
        
      </header> */}
    <Sidebar></Sidebar>
    {/* <div className="container my-3">
        <ul className="nav nav-tabs nav-fill">
          <li className="nav-item">
            <button className="nav-link " 
            onClick={()=>navigate('mobile-list')}>
              Mobile List
              </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={()=>navigate('add')}>
              Add/Edit Mobile
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={()=>navigate('profile')}>
              Profile
            </button>
          </li>
        <form className="d-flex" role="search" onSubmit={search}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchedMobile}
          onChange={filter}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </ul>
        <div className="container-sm col-wrap">
        <ul className="list-unstyled mb-0 list-group">
          {searchedMobile &&
            mobileList &&
            mobileList?.map((mobile:Mobile) => (
              <li
                key={mobile.id}
                className="list-group-item list-group-item-light"
                onClick={()=>{navigate('view/'+mobile.model);setMobileList([]);setSearchedMobile('')}}
              >
              <span className="li-item" >{mobile.model} </span>
              </li>
            ))}
        </ul>
      </div> */}
      <Outlet />
    {/* </div> */}
    </>
  );
}

export default Home;
