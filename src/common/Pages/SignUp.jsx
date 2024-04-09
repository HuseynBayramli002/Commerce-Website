import React, { useState } from 'react'
import Basketphone from '../../assets/Basketphone.png'
import Button from '../components/Button'
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async () => {
        console.log(navigate)
        try {
            const User = await axios.post('http://localhost:3000/users', { name, email, password });
            console.log('Basarili', User.data)
        } catch (error) {
            console.error('Basarisiz:', error);
        }
        setName('');
        setEmail('');
        setPassword('');
        navigate('/')
    };


    return (
        <div className='flex mt-14 w-full justify-between gap-20 pr-24'>
            <div>
                <img src={Basketphone} className='select-none' alt="" />
            </div>
            <form className='flex flex-col justify-center'>
                <p className='text-4xl font-medium'>Create an account</p>
                <p className='mt-6'>Enter your details below </p>
                <input value={name} onChange={(e) => setName(e.target.value, console.log(e.target.value))} type="text" placeholder='Name' className='border-b-[1px] outline-none mt-8 py-2' />
                <input value={email} onChange={(e) => setEmail(e.target.value, console.log(e.target.value))} type="email" placeholder='Email or Phone Number' className='border-b-[1px] outline-none mt-8 py-2' />
                <input value={password} onChange={(e) => setPassword(e.target.value, console.log(e.target.value))} type="password" placeholder='Password' className='border-b-[1px] outline-none mt-8 py-2' />
                <div className='mt-10'>
                    <Button
                        type='submit'
                        buttonTitle="Create Account" buttonFunk={handleSubmit} color='#DC2626' fontSize='16px' fontWeight='500' />
                </div>
                <div className='mt-4 border-[1px] rounded-sm'>
                    <Button
                        type='button'
                        buttonTitle='Sign up with Google'
                        buttonIcon={<FcGoogle />}
                        textColor='#000000' fontSize='16px' fontWeight='400' />
                </div>
                <p className='mt-8 text-center'>Already have account? <NavLink to={'/login'} className={'p-[4px] border-b-[1px]'}>Login</NavLink></p>
            </form>
        </div>
    )
}

export default SignUp