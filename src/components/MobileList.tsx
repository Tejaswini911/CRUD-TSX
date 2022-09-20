import React from 'react'
import { contextType, Mobile } from './model/Mobile';
import  { MobileContext } from "../components/model/MobileContext";
import { useNavigate } from 'react-router-dom';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';


function MobileList() {
  const {mobileList, mobiles, deleteMobile, deleteMobiles} = React.useContext(MobileContext) as contextType;
  //console.log(mobiles);
  const navigate = useNavigate() 
  const mobileElements = mobiles?.map((mobile:Mobile, index:number) => {
    return (
      <tr key={mobile.id}>
        <th scope="row">{index + 1}</th>
        <td>{mobile.model}</td>
        <td>{mobile.ram}</td>
        <td>{mobile.rom}</td>
        <td>
        <button 
            className="btn btn-sm btn-primary "
            onClick={()=>navigate('/home/edit/'+mobile.model)}
          > <AiFillEdit className="icon"/>
          </button>      
          &nbsp;
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              deleteMobiles(mobile.id ? mobile.id : '')
            }}
          >
          <AiOutlineDelete className="icon" />
          </button>
        </td>
      </tr>
    );
  });
  return (
   
    <div className="container my-3">
      <h2>List of Mobiles</h2>

      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Model</th>
              <th scope="col">RAM</th>
              <th scope="col">Storage</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{mobileElements}</tbody>
        </table>
      </div>
     
    </div>
  )
}

export default MobileList