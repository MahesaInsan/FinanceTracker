import React, { useEffect, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import axios from 'axios';
import LeftProfile from './LeftProfile';
import Cookies from 'universal-cookie';

export default function EditProfile() {
    const [validEmail, setValidEmail] = useState(true);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        bio: ''
    });
    const [passwords, setPasswords] = useState({
        password: '',
        confirmPassword: ''
    });
    const [passwordMatch, setPasswordMatch] = useState(true);
    const cookie = new Cookies();
    const [formDisabled, setFormDisabled] = useState(true);

    const handleButtonClick = () => {
        setFormDisabled(!formDisabled);
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:8000/api/user',
                    {
                        headers: {
                            withCredentials: true,
                            Accept: 'application/json',
                            Authorization: 'Bearer ' + cookie.get('jwt'),
                            cookie: cookie
                        }
                    }
                );
                console.log('user', response);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user', error);
            }
        };

        fetchUser();
    }, []);

    const handleNameChange = (e) => {
        setUser({
            ...user,
            name: e.target.value
        });
    };

    const handleEmailChange = (e) => {
        setUser({
            ...user,
            email: e.target.value
        });
    };

    const handlePasswordChange = (e) => {
        setPasswords({
            ...passwords,
            password: e.target.value
        });
    };

    const handleConfirmPasswordChange = (e) => {
        setPasswords({
            ...passwords,
            confirmPassword: e.target.value
        });
    };

    const handlBioChange = (e) => {
        setUser({
            ...user,
            bio: e.target.value
        });
    };

    const passwordMatcher = () => {
        if (passwords.password !== passwords.confirmPassword) {
            setPasswordMatch(false);
        } else if (passwords.password === passwords.confirmPassword) {
            setPasswordMatch(true);
        }
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(user.email);
        setValidEmail(isValid);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        passwordMatcher();
        validateEmail();

        if (passwords.password === '' && validEmail) {
            try {
                const response = await axios.put(
                    `http://127.0.0.1:8000/api/profile`,
                    {
                        name: user.name,
                        email: user.email,
                        password: 'empty',
                        bio: user.bio
                    },
                    {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            Authorization: 'Bearer ' + cookie.get('jwt')
                        }
                    }
                );
                console.log(response);
                window.location.reload();
            } catch (error) {
                console.error('Error updating user:', error);
            }
        } else if (passwordMatch && validEmail) {
            try {
                const response = await axios.put(
                    `http://127.0.0.1:8000/api/profile`,
                    {
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        bio: user.bio
                    },
                    {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            Authorization: 'Bearer ' + cookie.get('jwt')
                        }
                    }
                );
                console.log(passwords.password);
                console.log(response);
            } catch (error) {
                console.error('Error updating user:', error);
            }
        }
    };

    return (
        <div className='flex flex-col sm:flex-row justify-center items-center pb-[2rem]'>
            <LeftProfile />

            <form className='flex flex-col sm:pl-32 gap-4 justify-center items-center' onSubmit={handleUpdate}>
            {formDisabled ? (
                    <button
                        onClick={handleButtonClick}
                        className='p-3 bg-primaryColor hover:bg-hoverSecondaryColor text-white rounded w-[50%]'
                    >
                        Edit profile
                    </button>
                    
                ) : (
                    <div className='flex flex-row gap-[5rem]'>
                      <button
                        onClick={handleButtonClick}
                        className='p-3 bg-primaryColor hover:bg-hoverSecondaryColor text-white rounded sm:w-[15rem] w-[50%]'
                    >
                        Cancel
                    </button>
                        <button
                            type='submit'
                            className='p-3 bg-primaryColor hover:bg-hoverSecondaryColor text-white rounded sm:w-[15rem] w-[50%]'
                        >
                            Submit
                        </button>
                    </div>
                )}
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Full Name</h1>
                    <div className='flex flex-row h-[3rem] sm:w-[40rem] w-[20rem] border-2 border-[#8CC7D4] rounded-lg items-center'>
                        <BsPerson className='pointer-events-none w-6 h-6 ml-3'></BsPerson>
                        <input
                            type='text'
                            className='ml-3 h-full w-[90%] outline-none'
                            placeholder='Input your full name'
                            value={user.name}
                            onChange={handleNameChange}
                            required
                            disabled={formDisabled}
                            maxLength={40}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Email</h1>
                    <div className='flex flex-row h-[3rem] sm:w-[40rem] w-[20rem] border-2 border-[#8CC7D4] rounded-lg items-center'>
                        <AiOutlineMail className='pointer-events-none w-6 h-6 ml-3'></AiOutlineMail>
                        <input
                            type='text'
                            className='ml-3 h-full w-[90%] outline-none'
                            placeholder='Input email'
                            value={user.email}
                            onChange={handleEmailChange}
                            required
                            disabled={formDisabled}
                        />
                    </div>
                </div>
                {!validEmail && (
                    <p className='text-red-500'>
                        Please enter a valid email address.
                    </p>
                )}

                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Password</h1>
                    <div className='flex flex-row h-[3rem] sm:w-[40rem] w-[20rem] border-2 border-[#8CC7D4] rounded-lg items-center'>
                        <AiOutlineLock className='pointer-events-none w-6 h-6 ml-3'></AiOutlineLock>
                        <input
                            type='password'
                            className='ml-3 h-full w-[90%] outline-none'
                            placeholder='Input password'
                            value={passwords.password}
                            onChange={handlePasswordChange}
                            disabled={formDisabled}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Confirm password</h1>
                    <div className='flex flex-row h-[3rem] sm:w-[40rem] w-[20rem] border-2 border-[#8CC7D4] rounded-lg items-center'>
                        <AiOutlineLock className='pointer-events-none w-6 h-6 ml-3'></AiOutlineLock>
                        <input
                            type='password'
                            className='ml-3 h-full w-[90%] outline-none'
                            placeholder='Confirm password'
                            value={passwords.confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            disabled={formDisabled}
                        />
                    </div>
                </div>
                {!passwordMatch && (
                    <p className='text-red-500'>Passwords do not match</p>
                )}

                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Bio</h1>
                    <textarea
                        rows='10'
                        className='block p-2.5 sm:w-[40rem] w-[20rem] text-sm rounded-lg outline-none border-2 border-[#8CC7D4]'
                        placeholder='Your bio...'
                        value={user.bio}
                        onChange={handlBioChange}
                        disabled={formDisabled}
                    ></textarea>
                </div>
            </form>
        </div>
    );
}
