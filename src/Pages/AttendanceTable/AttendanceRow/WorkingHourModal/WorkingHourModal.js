import React from 'react';

const WorkingHourModal = ({ times, employee, selectedDate, setTimes, setSelectedDate, dateStatus }) => {
    // console.log();

    const closeModal = () => {
        setTimes(null);
        setSelectedDate(null);
    }

    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={closeModal} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mt-5">{employee.name}'s working time on {selectedDate}</h3>
                    {
                        times.length === 0 ?
                            <>
                                {
                                    dateStatus === 'holiday' ?
                                        <p>It Was a holiday</p>
                                        :
                                        <p>{employee.username} was absent that day</p>
                                }
                            </>
                            :
                            times.map(time => <p data-theme="night" className="py-4 my-2 rounded-lg font-bold text-xl">{time}</p>)
                    }

                </div>
            </div>
        </div>
    );
};

export default WorkingHourModal;