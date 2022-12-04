import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AttendanceRow from './AttendanceRow/AttendanceRow';
import DateTable from './DateTable/DateTable';

const AttendanceTable = () => {

    const [employees, setEmployees] = useState([]);
    const [dates, setDates] = useState([]);

    const { data: tabledata } = useQuery({
        queryKey: ['test'],
        queryFn: () => fetch('https://test.nexisltd.com/test ', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    });

    useEffect(() => {
        if (tabledata) {
            setEmployees(Object.values(tabledata));

        }
    }, [tabledata]);

    useEffect(() => {
        if (employees && employees[0]?.attendance) {
            setDates(Object.keys(employees[0]?.attendance));
            // setEmployees({ ...employees, dates: [dates] })
        }
    }, [employees]);





    // useEffect(() => {
    //     // if (employees && dates) {
    //     //     setEmployees({ ...employees, dates })
    //     // }

    //     if (dates) {
    //         dates.map(date => {
    //             setEmployees({ ...employees, date })
    //         })
    //     }
    // }, [employees, dates])

    return (

        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden w-full">Choose Profile</label>
                {
                    employees.map((employee, i) => <DateTable
                        employees={employees}
                        key={i}
                        dates={dates}
                        employee={employee}
                    ></DateTable>)
                }

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul data-theme="synthwave" className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    {
                        employees.map(employee => <li data-theme="winter" className='mt-5 font-bold rounded-lg' key={employee.id}><a href={`#${employee.name}`}>{employee.name}</a></li>)
                    }
                </ul>

            </div>
        </div>
    );
};

export default AttendanceTable;