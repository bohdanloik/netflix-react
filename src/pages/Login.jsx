import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[error, setError] = useState('');
  const {user, logIn} = UserAuth();

  const navigate = useNavigate();

  const submitHundler = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/');
    } catch(error) {
      setError(error.message)
    }

  }
  return (
    <React.Fragment>
       <div className='w-full h-screen'>
        <img className=' sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/95f72633-302d-4048-a070-ce5beeb8ce2e/UA-uk-20220620-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className='bg-black/50 fixed top-0 h-screen w-full left-0'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                  <h1 className='text-3xl'>Sign In</h1>
                  {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
                  <form onSubmit={submitHundler} className='flex flex-col py-4 w-full'>
                    <input onChange={(e)=> setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded'
                      type="email" 
                      placeholder='Email'
                      autoComplete='email'
                    />
                    <input onChange={(e)=> setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 roun'
                      type="password" 
                      placeholder='Password'
                      autoComplete='current-password'
                    />
                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                    <div className='flex justify-between text-gray-600 text-sm'>
                      <p><input className='mr-2' type="checkbox"/> Remember Me</p>
                      <p>Need Help?</p>
                    </div>
                    <p className='py-8'><span className='text-gray-600'>New to Netflix?</span>
                    <Link to='/signup'>
                      Sign In
                    </Link>
                      </p>
                  </form>
                </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login