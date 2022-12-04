import React, { useContext, useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const PhoneAndEmail = () => {

    const navigate = useNavigate();

    const { updatingUser, setUpdatingUser } = useContext(AuthContext);
    const [countryCode, setCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleNext = (event) => {
        event.preventDefault();

        // const form = event.target;
        // const phoneNumber = `${form.countrycode.value}-${form.phone.value}`;
        // const email = form.email.value;

        // setUpdatingUser({ ...updatingUser, phoneNumber, email });


        console.log(updatingUser);
        navigate('/signup/password');
    }

    const handleOnblur = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUpdatingUser({ ...updatingUser, [property]: value });
    };

    const handlePhoneNumber = (event) => {

        // const Phone = `${event.target.countryCode}-${event.target.PhoneNumber}`;


        // switch (event.target.name) {
        //     case 'countryCode':
        //         setCountryCode(event.target.value);
        //         console.log(event.target.value);
        //         break;
        //     case 'PhoneNumber':
        //         setPhoneNumber(event.target.value);
        //         console.log(event.target.value);
        //         break;

        //     default:
        //         break;
        // }
        if (event.target.name === 'countryCode') {
            setCountryCode(event.target.value);
            console.log(event.target.value);
        }
        else if (event.target.name === 'PhoneNumber') {
            setPhoneNumber(event.target.value);
            console.log(event.target.value);
        }
        // console.log(event.target);

        // setUpdatingUser({ ...updatingUser, Phone: `${event.countryCode.value}-${event.PhoneNumber.value}` });
        // setUpdatingUser({ ...updatingUser, [event.target.name]: `${event.target.value}` });

    }


    useEffect(() => {
        setUpdatingUser({ ...updatingUser, phone_number: `${countryCode}-${phoneNumber}` });

    }, [countryCode, phoneNumber])

    return (
        <form onSubmit={handleNext} className='w-full'>
            <div className='flex w-full'>
                <input onBlur={handlePhoneNumber} name='countryCode' className='border-b border-solid border-[#A4A4A4] px-2 py-2 mb-[84px] w-[20%] mr-2' type="text" placeholder='+880' />
                <input onBlur={handlePhoneNumber} name='PhoneNumber' className='border-b border-solid border-[#A4A4A4] px-2 py-2 mb-[84px] w-full' type="text" placeholder='1xxxxxxxxxx' />
            </div>
            <input onChange={handleOnblur} name='email' className='border-b border-solid border-[#A4A4A4] px-2 py-2 mb-[68px] w-full' type="email" placeholder='Write Email Address' />
            <div className='flex justify-evenly w-full'>
                <button onClick={() => navigate(-1)} className={`btn btn-ghost`}>Back</button>
                <button className={`flex items-center justify-center text-white p-2 font-bold rounded-lg bg-[#1678CB] w-[50%] text-center`} type="submit"><spam className='mr-2'>Next Step</spam> <FaArrowRight /></button>
            </div>
        </form>
    );
};

export default PhoneAndEmail;