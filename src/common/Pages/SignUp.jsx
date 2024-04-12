import React, { useState } from 'react';
import Basketphone from '../../assets/Basketphone.png';
import Button from '../components/Button';
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name.length < 3) {
            setNameError('Name must be at least 3 characters');
            return;
        }

        if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            return;
        }

        try {
            const User = await axios.post('http://localhost:3000/users', { name, email, password });
            console.log('Basarili', User.data)
            setName('');
            setEmail('');
            setPassword('');
            navigate('/');
        } catch (error) {
            console.error('Basarisiz:', error);
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className='flex mt-14 w-full justify-between gap-20 pr-24'>
            <div>
                <img src={Basketphone} className='select-none' alt="" />
            </div>
            <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
                <p className='text-4xl font-medium'>Create an account</p>
                <p className='mt-6'>Enter your details below </p>
                <input value={name} onChange={(e) => { setName(e.target.value); setNameError(''); }} type="text" placeholder='Name' className='border-b-[1px] outline-none mt-8 py-2' />
                {nameError &&  <p className='text-red-700'>{nameError}</p>}
                <input value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(''); }} type="email" placeholder='Email or Phone Number' className='border-b-[1px] outline-none mt-8 py-2' />
                {emailError &&  <p className='text-red-700'>{emailError}</p>}
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='border-b-[1px] outline-none mt-8 py-2' />
                {passwordError && <p className='text-red-700'>{passwordError}</p>}
                <div className='mt-10'>
                    <Button
                        type='submit'
                        btnTitle="Create Account" btnFunk={handleSubmit} color='#DC2626' btnSize='16px' btnWeight='500' />
                </div>
                <div className='mt-4 border-[1px] rounded-sm'>
                    <Button
                        type='button'
                        btnTitle='Sign up with Google'
                        buttonIcon={<FcGoogle />}
                        textColor='#000000' btnSize='16px' btnWeight='400' />
                </div>
                <p className='mt-8 text-center'>Already have account? <NavLink to={'/login'} className={'p-[4px] border-b-[1px]'}>Login</NavLink></p>
            </form>
        </div>
    )
}

export default SignUp;
