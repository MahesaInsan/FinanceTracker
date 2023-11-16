import React, { useEffect, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EditProfile() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const { id } = useParams();
    const [passwords, setPasswords] = useState({
        password: '',
        confirmPassword: '',
      });
      const [passwordMatch, setPasswordMatch] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/profile/${id}`
                );
                console.log(response);
                setUser(response.data.user);
            } catch (error) {
                console.error('Error fetching user', error);
            }
        };

        fetchUser();
    }, [id]);

    const handleNameChange = (e) => {
        setUser({
          ...user,
          name: e.target.value,
        });
      };

      const handleEmailChange = (e) => {
        setUser({
          ...user,
          email: e.target.value,
        });
      };

      const handlePasswordChange = (e) => {
        setPasswords({
          ...passwords,
          password: e.target.value,
        });
      };
    
      const handleConfirmPasswordChange = (e) => {
        setPasswords({
          ...passwords,
          confirmPassword: e.target.value,
        });
      };

      useEffect(() => {
        
      })

      const handleUpdate = async (e) => {
        e.preventDefault();

        if(passwords.password === ''){
            try {
                const response = await axios.put(`http://127.0.0.1:8000/api/profile/${id}`, {
                    name: user.name,
                    email: user.email,
                    password: 'empty',
                });
                console.log(response);
            } catch (error) {
                console.error('Error updating user:', error);
            }
        }else if(passwords.password === passwords.confirmPassword){
            setPasswordMatch(true);
            try {
                const response = await axios.put(`http://127.0.0.1:8000/api/profile/${id}`, {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                });
                console.log(response)
            } catch (error) {
                console.error('Error updating user:', error);
            }
        }else if(passwords.password !== passwords.confirmPassword){
            setPasswordMatch(false);
        }
      }

    return (
        <div className='flex flex-row justify-center'>
            <div className='flex flex-col pt-6 pl-[4rem] w-[18rem] justify-center text-center gap-4 align-middle items-center'>
                <img
                    src='/profiles/dummyphoto.png'
                    className='flex rounded-full'
                ></img>
                <h1 className='font-semibold text-2xl'>Mahesa</h1>
                <div className='flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center'>
                    <h1 className='pt-2 text-lg'>Current Money</h1>
                    <h1 className='pb-2 text-lg font-semibold'>
                        Rp 12.345.000
                    </h1>
                </div>
                <div className='flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center'>
                    <h1 className='pt-2 text-lg'>Total money in</h1>
                    <h1 className='pb-2 text-lg font-semibold text-[#62C668]'>
                        Rp 4.950.000
                    </h1>
                </div>
                <div className='flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center'>
                    <h1 className='pt-2 text-lg'>Total money out</h1>
                    <h1 className='pb-2 text-lg font-semibold text-[#DF2424]'>
                        Rp 4.950.000
                    </h1>
                </div>
            </div>
            <form className='flex flex-col pl-32 gap-4' onSubmit={handleUpdate}>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Full Name</h1>
                    <div className='flex flex-row h-[3rem] w-[40rem] border-2 border-[#8CC7D4] rounded-lg items-center'>
                        <BsPerson className='pointer-events-none w-6 h-6 ml-3'></BsPerson>
                        <input
                            type='text'
                            className='ml-3 h-full w-[90%] outline-none'
                            placeholder='mahesa'
                            value={user.name}
                            onChange={handleNameChange}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Email</h1>
                    <div className='flex flex-row h-[3rem] w-[40rem] border-2 border-[#8CC7D4] rounded-lg items-center'>
                        <AiOutlineMail className='pointer-events-none w-6 h-6 ml-3'></AiOutlineMail>
                        <input
                            type='text'
                            className='ml-3 h-full w-[90%] outline-none'
                            placeholder='Input email'
                            value={user.email}
                            onChange={handleEmailChange}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Password</h1>
                    <div className='flex flex-row h-[3rem] w-[40rem] border-2 border-[#8CC7D4] rounded-lg items-center'>
                        <AiOutlineLock className='pointer-events-none w-6 h-6 ml-3'></AiOutlineLock>
                        <input
                            type='password'
                            className='ml-3 h-full w-[90%] outline-none'
                            placeholder='Input password'
                            value={passwords.password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Confirm password</h1>
                    <div className='flex flex-row h-[3rem] w-[40rem] border-2 border-[#8CC7D4] rounded-lg items-center'>
                        <AiOutlineLock className='pointer-events-none w-6 h-6 ml-3'></AiOutlineLock>
                        <input
                            type='password'
                            className='ml-3 h-full w-[90%] outline-none'
                            placeholder='Confirm password'
                            value={passwords.confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                </div>
                {!passwordMatch && <p className='text-red-500'>Passwords do not match</p>}

                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Bio</h1>
                    <textarea
                        id='message'
                        rows='10'
                        className='block p-2.5 w-full text-sm rounded-lg outline-none border-2 border-[#8CC7D4]'
                        placeholder='Your bio...'
                    ></textarea>
                </div>
                <button
                    type='submit'
                    className='p-3 bg-primaryColor hover:bg-hoverSecondaryColor text-white rounded w-[50%]'
                >
                    Confirm edit
                </button>
            </form>
        </div>
    );
}
