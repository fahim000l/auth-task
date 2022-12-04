import { render } from '@testing-library/react';
import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Names = () => {

    const { updatingUser, setUpdatingUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleNext = (event) => {
        event.preventDefault();

        // const form = event.target;
        // const firstName = form.firstName.value;
        // const lastName = form.lastName.value;

        // setUpdatingUser({ ...updatingUser, firstName, lastName });
        console.log(updatingUser);
        navigate('/signup/phoneandemail');

    };


    const handleOnblur = (event) => {

        const property = event.target.name;
        const value = event.target.value;

        setUpdatingUser({ ...updatingUser, [property]: value });
    }


    return (
        <form onSubmit={handleNext} className='w-full'>
            <input onChange={handleOnblur} name='First_name' className='border-b border-solid border-[#A4A4A4] px-2 py-2 mb-[84px] w-full' type="text" placeholder='Write First Name' />
            <input onChange={handleOnblur} name='Last_name' className='border-b border-solid border-[#A4A4A4] px-2 py-2 mb-[68px] w-full' type="text" placeholder='Write Last Name' />
            <button className={`flex items-center justify-center text-white p-2 font-bold rounded-lg bg-[#1678CB] w-[50%] text-center`} type="submit"><spam className='mr-2'>Next Step</spam> <FaArrowRight /></button>
        </form>
    );
};

export default Names;