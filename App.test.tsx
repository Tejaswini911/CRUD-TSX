import React from 'react';
import { MemoryRouter } from 'react-router-dom';
const { render, screen } = require('@testing-library/react');
import App from './App';
import AddEdit from './components/AddEdit';
import Auth from './components/Auth';
import Home from './components/Home';
import Login from './components/Login';
import MobileList from './components/MobileList';
import Profile from './components/Profile';
import Register from './components/Register';
import Search from './components/Search';

jest.mock('./components/Auth.tsx');
jest.mock('./components/Login');
jest.mock('./components/Register');
jest.mock('./components/Home');
jest.mock('./components/MobileList');
jest.mock('./components/Profile');
jest.mock('./components/AddEdit');
jest.mock('./components/Search');

describe('testing the routes',()=>{
  test("testing default page",()=>{
  //  const mockedAuth = Auth  as jest.Mock<typeof Auth>
    Auth.mockImplementation(() =>{return (<div>HomePage Mock</div>)})
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
    const mockedHome = Home as jest.Mock<typeof Home>
    mockedHome.mockImplementation(() =>{return (<div >Home page</div>)})
    render(<MemoryRouter initialEntries={['/home']}><App /></MemoryRouter>)
    expect(screen.getByText("Home page")).toBeInTheDocument();
  });
  test("testing MobileList page",()=>{
    const mockedMobileList = Home as jest.Mock<typeof MobileList>
    mockedMobileList.mockImplementation(() =>{return (<div>MobileList page</div>)})
    render(<MemoryRouter initialEntries={['/home/mobile-list']}><App /></MemoryRouter>);
    expect(screen.getByText("MobileList page")).toBeInTheDocument();
  });
  test("testing AddEdit page",()=>{
    const mockedAddEdit = Home as jest.Mock<typeof AddEdit>
    mockedAddEdit.mockImplementation(() =>{return (<div>AddEdit page</div>)})
    render(<MemoryRouter initialEntries={['/home/add']}><App /></MemoryRouter>);
    expect(screen.getByText("AddEdit page")).toBeInTheDocument();
  });
  test("testing Edit page",()=>{
    const mockedEdit = Home as jest.Mock<typeof AddEdit>
    mockedEdit.mockImplementation(() =>{return (<div>Edit page</div>)})
    render(<MemoryRouter initialEntries={['/home/edit/test']}><App /></MemoryRouter>);
    expect(screen.getByText("Edit page")).toBeInTheDocument();
  });
  test("testing Profile page",()=>{
    const mockedProfile = Home as jest.Mock<typeof Profile>
    mockedProfile.mockImplementation(() =>{return (<div>Profile page</div>)})
    render(<MemoryRouter initialEntries={['/home/profile']}><App /></MemoryRouter>);
    expect(screen.getByText("Profile page")).toBeInTheDocument();
  });
  test("testing Search page",()=>{
    const mockedSearch = Home as jest.Mock<typeof Search>
    mockedSearch.mockImplementation(() =>{return (<div>Search page</div>)})
    render(<MemoryRouter initialEntries={['/home/view/test']}><App /></MemoryRouter>);
    expect(screen.getByText("Search page")).toBeInTheDocument();
  });
})
