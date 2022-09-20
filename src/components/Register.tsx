import React from "react";
import { useNavigate } from "react-router-dom";
import { contextType } from "./model/Mobile";
import { MobileContext } from "./model/MobileContext";
import { User } from "./model/Mobile";



function Register() {
  const navigate = useNavigate();
  const {users, postUser} = React.useContext(MobileContext) as contextType
  const formData: React.MutableRefObject<any> = React.useRef();
  const [error, setError] = React.useState<string>('');

  const submit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, password } = formData.current;
    const newUser: User = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    if(Validate(newUser)){
    // const users: Array<User> = JSON.parse(
    //   localStorage.getItem("users") || "[]"
    // );
   // users.push(newUser);
    //localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem('currentUser',JSON.stringify(newUser));
    postUser(newUser);
    alert("You have been registered successfully!");
    navigate('/home/mobile-list');
    setError('');
    }

  };

  function Validate(newuser:User) {
    let isValid = true;
    
       users.map((user) => {
        if (user.email === newuser.email) {
          isValid = false;
          setError("User email already exists");
        }
      });
    return isValid;
  }


  return (
    <div className="container-sm">
      <form onSubmit={submit} ref={formData}>
      <h3 className="title">SignUp</h3>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" name="name" required placeholder="Name"/>
          <label className="form-label">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" name="email" required placeholder="Email ID"/>
          <label className="form-label">Email address</label>
          {error && <p className="error-msg">*{error}</p>}
        </div>
        <div className="form-floating mb-3">  
          <input type="password" className="form-control" name="password" required placeholder="Password"/>
          <label className="form-label">Password</label>
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
        
      </form>
    </div>
  );
}

export default Register;
