import React from 'react'
import { useNavigate } from 'react-router-dom';
import { contextType, User } from './model/Mobile'
import { MobileContext } from './model/MobileContext';


function Profile() {
    const currentUser:User = JSON.parse(localStorage.getItem('currentUser') || '');
    const [inputs, setInputs] = React.useState<User>(currentUser);
    const navigate = useNavigate();
    const {updateUser} = React.useContext(MobileContext) as contextType;
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
      } 
  return (
    <>
    <h2 className='my-3'>Profile</h2>
    <div className="container">
		<div className="main-body">
			<div className="row col-9">
				<div className="col-lg-4">
					<div className="card">
						<div className="card-body">
							<div className="d-flex flex-column align-items-center text-center">
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110"/>
								<div className="mt-3">
									<h4>{currentUser.name}</h4>
									<p className="text-secondary mb-1">Admin</p>
									<p className="text-muted font-size-sm">Software Engineer, MapleLabs</p>
									
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-8">
					<div className="card">
						<div className="card-body">
							<div className="row mb-3">
								<div className="col-sm-3">
									<h6 className="mb-0">Full Name</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" className="form-control" name='name' value={inputs.name} onChange={handleChange}/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3">
									<h6 className="mb-0">Email</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" className="form-control" name='email' value={inputs.email} onChange={handleChange}/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3">
									<h6 className="mb-0">Password</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" className="form-control" name='password' value={inputs.password} onChange={handleChange}/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3">
                                <input type="button" className="btn btn-primary " value="Save Changes" onClick={()=>{localStorage.setItem('currentUser',JSON.stringify(inputs));
                            updateUser(currentUser.id?currentUser.id:1, currentUser)}}/>
                                </div>
								<div className="col-sm-9 text-secondary">
                                <input type="button" className="btn btn-primary " value="Log Out" onClick={()=>navigate('/')}/>
								</div>
							</div>
						</div>
					</div>
					
					</div>
				</div>
			</div>
		</div>

    </>
  )
}

export default Profile