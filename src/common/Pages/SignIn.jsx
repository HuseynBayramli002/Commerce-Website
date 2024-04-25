import React, { useState } from 'react';
import Basketphone from '../../assets/Basketphone.png';
import Button from '../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.get('http://localhost:3000/users')
            .then(result => {
                const user = result.data.find(user => user.email === email && user.password === password);
                if (user) {
                    navigate('/');
                } else {
                    setError('Incorrect email or password');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setError('An error occurred. Please try again later.');
            });
    };
    return (
        <div className='flex mt-14 w-full justify-between gap-20 pr-24'>
            <div className='w-3/5'>
                <img className='select-none' src={Basketphone} alt="" />
            </div>
            <form className='flex flex-col justify-center'>
                <p className='text-4xl font-medium'>Log in to Exclusive</p>
                <p className='mt-6'>Enter your details below</p>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder='Email or Phone Number'
                    className='border-b-[1px] outline-none mt-8 py-2' />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='Password'
                    className='border-b-[1px] outline-none mt-8 py-2' />
                {error && <p className='text-red-700'>{error}</p>}
                <div className='mt-10 flex justify-between items-center'>
                    <Button btnFunk={handleSubmit} btntype="submit" btnTitle="Log in" color='#DC2626' btnSize='16px' btnWeight='500' />
                    <p className='text-red-500'>Forget Password?</p>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
