import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contextType, Mobile } from "./model/Mobile";
import { MobileContext } from "./model/MobileContext";

function Search() {
  const { model } = useParams();
  const navigate = useNavigate();
  const [searchedMobile, setSearchedMobile] = React.useState<Mobile>({
    id: "",
    model: "",
    ram: "",
    rom: "",
  });
  const { mobiles } = React.useContext(MobileContext) as contextType;

  React.useEffect(() => {
    if (model) {
      setSearchedMobile((prev) =>
        mobiles.filter(
          (mobile) => mobile.model.toLowerCase() === model.toLowerCase()
        ).length > 0
          ? mobiles.filter(
              (mobile) => mobile.model.toLowerCase() === model.toLowerCase()
            )[0]
          : prev
      );
    }
  }, [model]);

  function handleClose() {
    navigate("/home/mobile-list");
    setSearchedMobile({ id: "", model: "", ram: "", rom: "" });
  }
  
  return (
    <>      
      {searchedMobile.id ? (
      <div className="container my-3">
      <h2>Mobile Details</h2>
      <hr />
      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Model</th>
              <th scope="col">RAM</th>
              <th scope="col">Storage</th>
            </tr>
          </thead>
          <tbody>
          <tr key={searchedMobile.id}>
        <th scope="row">1</th>
        <td>{searchedMobile.model}</td>
        <td>{searchedMobile.ram}</td>
        <td>{searchedMobile.rom}</td>
        </tr>
          </tbody>
        </table>
      </div>
      </div>
      ) : (
        <h3>Mobile Not Found</h3>
      )}
      <button className="btn btn-outline-primary" onClick={() => handleClose()}>
        Close
      </button>
    
    </>
  );
}

export default Search;
