import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../Provider/AuthProvider';

const Header = () => {
  const { user,logOut } = useContext(userContext)
const handleLogOut=()=>{
logOut()
.then(() => {
  // Sign-out successful.
})
.catch((error) => {
 console.log(error)
});
} 

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
              <Link to='/order'>Order</Link>
            </li>
            {
            user &&  <li>
            <Link to='/profile'>Profile</Link>
          </li>
           }
              <li tabIndex={0}>
                <Link to='/login'>Login</Link>


              </li>
              <li>
                <Link to='/register'>Register</Link>


              </li>
              <li>
               {
                user ? <div className="">
                  <span>{user.email}</span>
                 <button className="btn btn-sm" onClick={handleLogOut}>Sign Out</button>
                </div> : ' '
               }
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">authUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/order'>Order</Link>
            </li>
           {
            user &&  <li>
            <Link to='/profile'>Profile</Link>
          </li>
           }
            <li tabIndex={0}>
              <Link to='/login'>Login</Link>


            </li>
            <li><Link to='/register'>Register</Link>
            </li>
            <li>
               {
                user ? <div className="">
                  <span>{user.email}</span>
                 <button className="btn btn-sm" onClick={handleLogOut}>Sign Out</button>
                </div> : ' '
               }
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>

    </div>
  );
};

export default Header;