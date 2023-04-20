import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { userLogin, googleLogin } = useContext(userContext)
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userLogin(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()


            })
            .catch(error => { console.log(error) })

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
            })
            .catch(error => { console.log(error.message) })
    }
    return (

        <div className="hero mt-6">
            <div className="hero-content flex-col">
                <div className="text-center mb-3 ">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body " onSubmit={handleLogin}>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="ml-8 pb-4">
                        <p><small>New to auth Master.Please<button className="btn btn-link"><Link to='/register'>Register</Link></button>
                        </small></p>
                        <button className="btn btn-primary" onClick={handleGoogleLogin}>Google</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;