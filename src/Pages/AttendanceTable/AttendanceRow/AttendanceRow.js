import React from 'react';

const AttendanceRow = ({ date, handleWorkingTimes }) => {

    // console.log(employee);
    // const { branch, id, name, position, profile_pic, username, attendance } = employee;

    console.log(date);
    const { times, status } = date[1];
    return (
        <tr data-theme="winter" className='font-bold'>
            <td>{date[0]}</td>
            <td><p className={`${status === 'present' ?
                'bg-green-500'
                :
                (
                    status === 'absent' ?
                        'bg-red-600'
                        :
                        (
                            status === 'late' ?
                                'bg-yellow-500'
                                :
                                'bg-orange-500'
                        )
                )
                } btn btn-xs text-black border-0 font-bold w-20 cursor-auto hover:text-white`}>{status}</p></td>
            <td onClick={() => handleWorkingTimes(times, date[0], status)}><label htmlFor="my-modal-3" className="btn btn-xs">Show Working Times</label></td>
        </tr>
    );
};

export default AttendanceRow;