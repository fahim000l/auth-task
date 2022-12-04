import React, { useState, useEffect } from 'react';
import AttendanceRow from '../AttendanceRow/AttendanceRow';
import WorkingHourModal from '../AttendanceRow/WorkingHourModal/WorkingHourModal';

const DateTable = ({ date, employees, employee }) => {

    // const [status, setStatus] = useState([]);

    const [times, setTimes] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [dateStatus, setDateStatus] = useState('');

    const handleWorkingTimes = (times, date, status) => {
        setTimes(times);
        setSelectedDate(date);
        setDateStatus(status);
    }

    // employees.map(employee => {
    //     for (date in employee.attendance) {
    //         if (Object.hasOwnProperty.call(employee.attendance, date)) {
    //             const element = employee.attendance[date];
    //             // for (const status in element) {
    //             //     console.log(status);
    //             // }

    //             for (const key in element) {
    //                 if (Object.hasOwnProperty.call(element, 'status')) {
    //                     const statusByDate = element['status'];
    //                     console.log(employee.username, date, statusByDate);
    //                     // status.push(<td>{statusByDate}</td>);
    //                 }
    //             }
    //             // console.log(element);
    //             // console.log(attendance.date);
    //             // setStatus(element?.status);
    //             // return element?.status
    //             // setStatus(element.status);

    //             // setStatus([...status, element.status])
    //         }
    //     }
    // })
    // console.log(status);
    // status.map(stat => console.log(stat));

    const { attendance } = employee

    const [attendances, setAttendances] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        if (attendance) {
            setAttendances(Object.values(attendance));
            setDates(Object.entries(attendance));
        }
    }, [attendance]);
    console.log(employee);


    return (
        <div className='mt-10 mb-5'>
            <div className='flex'>
                <div className="avatar ml-2 mb-2">
                    <div className="w-[60px] h-[60px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img alt='' src={employee.profile_pic} />
                    </div>
                </div>
                <div className='font-bold text-start ml-5'>
                    <p id={`${employee.name}`} className='lg:text-3xl text-2xl'>Attendance of <span className='text-blue-500'>{employee.name}</span> </p>
                    <p>Id : {employee.id}</p>
                    <p>Position : {employee.position}</p>
                    <p>Branch : {employee.branch}</p>
                </div>
            </div>
            <div data-theme="aqua" className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Working Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            status &&
                            employees.map((employee, i) => <AttendanceRow
                                key={employee.id}
                                employee={employee}
                                deciaml={i}
                                dates={dates}
                                date={date}
                            // status={status}
                            ></AttendanceRow>

                            )
                        } */}
                        {
                            dates.map((date) => <AttendanceRow
                                key={date}
                                date={date}
                                handleWorkingTimes={handleWorkingTimes}
                            ></AttendanceRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                (times && selectedDate) &&
                <WorkingHourModal times={times} dateStatus={dateStatus} setTimes={setTimes} employee={employee} setSelectedDate={setSelectedDate} selectedDate={selectedDate}></WorkingHourModal>
            }
        </div>
    );
};

export default DateTable;