import axios from "axios";
import React from "react";

import { Mobile, User } from "./Mobile";

export const MobileContext = React.createContext({});
interface Props {
  children: React.ReactNode;
}

const MobileProvider: React.FC<Props> = ({ children }) => {
  // const [mobileList, setMobileList] = React.useState<Mobile[]>(
  //   JSON.parse(
  //     localStorage.getItem("mobileList") ||
  //       `[
  //   { id: "1662023711235", model: "a6+", ram: "6gb", rom: "64gb" },
  //   { id: "1662023711345", model: "a6", ram: "4gb", rom: "32gb" },
  // ]`
  //   )
  // );

  const [users, setUsers] = React.useState<User[]>();
  const [mobiles, setMobiles] = React.useState<Mobile[]>();

  axios.defaults.baseURL="http://localhost:5000/"

  const url = "users";
  const mobils_url = "mobiles";

  React.useEffect(() => {
    getUsers();
    getMobiles();
  }, []);

  const postUser = (user: User) => {
    axios
      .post(url, user)
      .then(() => getUsers())
      .catch((err) => console.log(err.message));
  };

  const updateUser = (id: number, user: User) => {
    axios
      .put(`${url}/${id}`, user)
      .then(() => getUsers())
      .catch((err) => console.log(err.message));
  };

  const getUsers = () => {

    axios
      .get(url)
      .then((data) => setUsers(data.data))
      .catch((error) => console.log(error));
  };

  const postMobile = (mobile: Mobile) => {

    // const options = {
    //   method:"POST",
    //   headers :{
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body:JSON.stringify(mobile)
    // }
    // fetch(mobils_url,options).then((res)=>res.json).then(()=>getMobiles()).catch((err)=>console.log(err));
    axios
    .post(mobils_url, mobile)
    .then(() => getMobiles())
    .catch((err)=>console.log(err));
  };

  const updateMobiles = (id: string, mobile: Mobile) =>{ 
    axios
      .put(`${mobils_url}/${id}`, mobile)
      .then(() => getMobiles())
      .catch((err) => console.log(err));
  };

  const deleteMobiles = (id: string) => {
    axios
      .delete(`${mobils_url}/${id}`)
      .then(() => getMobiles())
      .catch((err) => console.log(err));
  };

  const getMobiles = () => {
    axios
      .get(mobils_url)
      .then((data) => setMobiles(data.data))
      .catch((error) => console.log(error));
  };
  // const options = {
  //   method:"GET",
  //   headers :{
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   }
  // }

  // fetch(mobils_url,options).then((res)=>res.json).then((res) => {
  //   setMobiles((prev)=>[...prev, res])
  // }).catch((err)=>console.log(err));

  /*
  React.useEffect(() => {
    localStorage.setItem("mobileList", JSON.stringify(mobileList));
  }, [mobileList]);

  const addMobile = (mobile: Mobile) => {
    const newMobile: Mobile = {
      id: new Date().getTime().toString(), // not really unique - but fine for this example
      model: mobile.model,
      ram: mobile.ram,
      rom: mobile.rom,
    };
    setMobileList([...mobileList, newMobile]);
  };

  const updateMobile = (editedMobile: Mobile) => {
    setMobileList(
      mobileList.map((mobile: Mobile) =>
        mobile.id === editedMobile.id
          ? { id: mobile.id, ...editedMobile }
          : mobile
      )
    );
  };

  const deleteMobile = (model: string) => {
    setMobileList(mobileList.filter((mobile) => mobile.model !== model));
  };
*/
  return (
    <MobileContext.Provider
      value={{
        users,
        // mobileList,
        mobiles,
        postUser,
        updateUser,
        postMobile,
        updateMobiles,
        deleteMobiles,
        // addMobile,
        // updateMobile,
        // deleteMobile,
      }}
    >
      {children}
    </MobileContext.Provider>
  );
};

export default MobileProvider;
//>npx json-server src/api/db.json --port 5000