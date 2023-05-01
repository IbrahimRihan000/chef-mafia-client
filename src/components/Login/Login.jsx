import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div> 
        
            <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Login to access our premium chefs and delicious food Delivery</p>
                    <button className='btn btn-accent'> Login with Google</button>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm hover:shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder=" Your Email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                            </label>
                            <p className='label-text-alt'>Dont have a account? Please   <Link className='text-purple-500' to="/register">Register</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Login;