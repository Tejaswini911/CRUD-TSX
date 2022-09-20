import React from 'react'
import { IconContext } from 'react-icons/lib';
import { Link, useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Sidebar.css';
import { contextType, Mobile } from './model/Mobile';
import { MobileContext } from "./model/MobileContext";

function Sidebar() {
    const [sidebar, setSidebar] = React.useState<boolean>();
    const showSidebar = () => setSidebar(!sidebar);
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
    <IconContext.Provider value={{color:'#fff'}}>
        <div className='navbar'>
            <Link to={'#'} className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            <h1 className="title">Mobile Database</h1>
            <form className="d-flex search-form" role="search" onSubmit={search}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchedMobile}
          onChange={filter}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        
        <div className="col-wrap">
        <ul className="list-unstyled mb-0 list-group">
          {searchedMobile &&
            mobileList &&
            mobileList?.map((mobile:Mobile) => (
              <li
                key={mobile.id}
                className="list-group-item list-group-item-light "
                onClick={()=>{navigate('view/'+mobile.model);setMobileList([]);setSearchedMobile('')}}
              >
              <span className="li-item" >{mobile.model} </span>
              </li>
            ))}
        </ul>
      </div>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu' }>

                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose onClick={showSidebar}></AiIcons.AiOutlineClose>
                        </Link>
                    </li>
                    <li className='nav-text ' >
                        <Link to={"mobile-list"}>
                            <AiIcons.AiFillHome></AiIcons.AiFillHome>
                           <span>Mobile List</span>
                        </Link>
                    </li>
                    <li className='nav-text' >
                        <Link to="add">
                            <AiIcons.AiOutlinePlus></AiIcons.AiOutlinePlus>                            
                           <span>Add/Edit Mobile</span>
                        </Link>
                    </li>
                    <li className='nav-text ' >
                        <Link to="profile">
                            <AiIcons.AiOutlineUser></AiIcons.AiOutlineUser>
                           <span>User Profile</span>
                        </Link>
                    </li>
               
                <li className='nav-text ' >
                        <Link to="/login">
                      <AiIcons.AiOutlineExport></AiIcons.AiOutlineExport>
                       <span>Log Out</span>
                        </Link>
                    </li>
                </ul>
        </nav>
    </IconContext.Provider>
    </>
  )
}

export default Sidebar