import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Password = () => {


    const { updatingUser, setUpdatingUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        setError('');
        // const form = event.target;
        // const password = form.password.value;

        // setUpdatingUser({ ...updatingUser, password });
        console.log(updatingUser);

        if (updatingUser.password.length < 8) {
            setError('Password must contain at least 8 characters');
            return;
        }

        fetch('https://test.nexisltd.com/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatingUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.sucess) {
                    Swal.fire('Account created successfully');
                    setUpdatingUser(null);
                }
                else if (data.error) {
                    setError(data.error);
                }
            })

    };

    const handleOnblur = (event) => {

        const property = event.target.name;
        const value = event.target.value;

        setUpdatingUser({ ...updatingUser, [property]: value });
    };

    return (
        <form onSubmit={handleSignUp} className='w-full'>
            <input onChange={handleOnblur} name='password' className='border-b border-solid border-[#A4A4A4] px-2 py-2 w-full' type="password" placeholder='Write Password' />
            <p className='mb-[84px] text-[#7E7E7E] text-start w-full'>Your password must be 8 character</p>
            {/* <button className={`flex items-center justify-center text-white p-2 font-bold rounded-lg bg-[#1678CB] w-[50%] text-center`} type="submit">Sign Up</button> */}
            <p className='text-red-600 font-bold text-xl'>{error}</p>
            <div className='flex justify-evenly w-full'>
                <button onClick={() => navigate(-1)} className={`btn btn-ghost`}>Back</button>
                <input name='signup' className={`flex items-center justify-center text-white p-2 font-bold rounded-lg bg-[#1678CB] w-[50%] text-center cursor-pointer`} type="submit" value="Sign Up" />
            </div>
        </form>
    );
};

export default Password;