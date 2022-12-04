import React from 'react';
import coverImage from '../../assets/istockphoto-1321277096-612x612 1.png'
import coverLogo from '../../assets/ultimate hrm logo-05-02 2.png'
import { Link, Outlet } from 'react-router-dom'


const SignUp = () => {

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
                    <h3 className='text-2xl font-bold mb-[110px]'>SignUp Form</h3>
                    <div className='mb-[100px]'>
                        <div className='flex flex-col items-center w-full'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                    <p className='text-[#7E7E7E] mb-[61px]'>Already have an account? <Link to={'/login'} className='btn btn-link text-[#1678CB]'>LOGIN HERE</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;