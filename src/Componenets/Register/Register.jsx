import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero mt-6">
  <div className="hero-content flex-col">
    <div className="text-center mb-3 ">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-3">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <div className="ml-8 pb-4">
      <p><small>Already have an account?.Please<button className="btn btn-link"><Link to='/login'>Login</Link></button>
        </small></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;