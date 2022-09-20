import React from 'react';
import { MemoryRouter } from 'react-router-dom';
const { render, screen } = require('@testing-library/react');
import App from './App';
import Auth from './components/Auth';
import Home from './components/Home';
import Login from './components/Login';
import MobileList from './components/MobileList';
import Register from './components/Register';

jest.mock('./components/Auth.tsx');
jest.mock('./components/Login');
jest.mock('./components/Register');
jest.mock('./components/Home');
jest.mock('./components/MobileList');
jest.mock('./components/Profile');
jest.mock('./components/AddEdit');



// const mockedLogin = Auth as jest.Mock<Login>;
// const mockedAuth = Auth as jest.Mock<Auth>;
describe('testing the routes',()=>{
  test("testing default page",()=>{
    const mockedAuth = Auth as jest.Mock<typeof Auth>
    mockedAuth.mockImplementation(() =>{return (<div>HomePage Mock</div>)})
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(screen.getByText("HomePage Mock")).toBeInTheDocument();
  });
  test("testing Login page",()=>{
    const mockedLogin = Auth as jest.Mock<typeof Login>
    mockedLogin.mockImplementation(() =>{return (<div>Login page</div>)})
    render(<MemoryRouter initialEntries={['/login']}><App /></MemoryRouter>);
    expect(screen.getByText("Login page")).toBeInTheDocument();
  });
  test("testing Signup page",()=>{
    const mockedsignup = Auth as jest.Mock<typeof Register>
    mockedsignup.mockImplementation(() =>{return (<div>signup page</div>)})
    render(<MemoryRouter initialEntries={['/sign-up']}><App /></MemoryRouter>);
    expect(screen.getByText("signup page")).toBeInTheDocument();
  });
  test("testing Home page",()=>{
    const mockedHome = Auth as jest.Mock<typeof Home>
    mockedHome.mockImplementation(() =>{return (<p>Home page</p>)})
    render(<MemoryRouter initialEntries={['/home']}><App /></MemoryRouter>);
    expect(screen.findByText("Home page")).toBeTruthy();
  });
  // test("testing MobileList page",()=>{
  //   const mockedMobileList = Auth as jest.Mock<typeof MobileList>
  //   mockedMobileList.mockImplementation(() =>{return (<div>MobileList page</div>)})
  //   render(<MemoryRouter initialEntries={['/home/mobile-list']}><App /></MemoryRouter>);
  //   expect(screen.getByText("MobileList page")).toBeInTheDocument();
  // });

})
