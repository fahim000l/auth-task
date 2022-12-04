import React, { useContext } from 'react';
import coverLogo from '../../assets/ultimate hrm logo-05-02 2.png';
import coverImage from '../../assets/istockphoto-1321277096-612x612 1.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const LogIn = () => {

    const { setLogingInUser, logingInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogIn = (event) => {
        event.preventDefault();

        console.log(logingInUser);

        fetch('https://test.nexisltd.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(logingInUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.access_token && data.refresh_token) {
                    toast.success('Loged In Successfully');
                    localStorage.setItem('accessToken', data.access_token);
                    localStorage.setItem('refreshToken', data.refresh_token);
                    navigate('/attendance');
                    setLogingInUser(null);
                }
            })
    }


    const handleBlur = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setLogingInUser({ ...logingInUser, [property]: value });
    }


    return (
        <div className='lg:flex h-[screen] bg-[#FFFFFF]'>
            <div className='lg:w-[60%] mt-[82px]'>
                <div className='lg:w-[60%] mx-auto'>
                    <img className='' src={coverLogo} alt="" />
                    <img className='w-full' src={coverImage} alt="" />
                </div>
            </div>
            <div className='lg:w-[40%] h-[screen]'>
                <div className='px-[75px] pt-[109px] mt-[25px] pb-[65px] w-[90%] shadow-xl h-[screen]'>
                    <h3 className='text-2xl font-bold mb-[110px]'>Log in Form</h3>
                    <form onSubmit={handleLogIn} className='mb-[100px]'>
                        <div className='flex flex-col items-center w-full'>
                            <input onChange={handleBlur} name='email' className='border-b border-solid border-[#A4A4A4] px-2 py-2 mb-[84px] w-full' type="email" placeholder='Write Email Address' />
                            <input onChange={handleBlur} name='password' className='border-b border-solid border-[#A4A4A4] px-2 py-2 mb-[68px] w-full' type="password" placeholder='Write Password' />
                        </div>
                        <input name='signup' className={`flex items-center justify-center text-white p-2 font-bold rounded-lg bg-[#1678CB] w-[50%] text-center cursor-pointer`} type="submit" value="Log In" />
                    </form>
                    <p className='text-[#7E7E7E] mb-[61px]'>Don't have an account? <Link to={'/signup'} className='btn btn-link text-[#1678CB]'>SIGNUP HERE</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;