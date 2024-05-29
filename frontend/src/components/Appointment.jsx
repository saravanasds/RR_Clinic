import React, { useState } from 'react';

const Appointment = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        doctorName: '',
        date: '',
        time: '',
        reason: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check for empty fields
        const { patientName, doctorName, date, time, reason } = formData;
        if (!patientName || !doctorName || !date || !time || !reason) {
            setMessage('Please fill this form!');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/appointments/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setFormData({
                    patientName: '',
                    doctorName: '',
                    date: '',
                    time: '',
                    reason: ''
                });
            } else {
                setMessage('Error: ' + data.message);
            }
        } catch (error) {
            setMessage('Server error');
        }
    };

    return (
        <div className='w-full h-[100vh] bg-slate-200 flex flex-col justify-center items-center gap-3'>
            <form className='flex flex-col justify-center items-center w-[50%] border-2 border-black gap-3 py-10' onSubmit={handleSubmit}>
                <input type="text" name="patientName" placeholder='Patient Name' className='w-[50%] p-3' onChange={handleChange} value={formData.patientName} />
                <input type="text" name="doctorName" placeholder='Doctor Name' className='w-[50%] p-3' onChange={handleChange} value={formData.doctorName} />
                <input type="date" name="date" placeholder='Date' className='w-[50%] p-3' onChange={handleChange} value={formData.date} />
                <input type="time" name="time" className='w-[50%] p-3' onChange={handleChange} value={formData.time} />
                <input type="text" name="reason" placeholder='Reason' className='w-[50%] p-3' onChange={handleChange} value={formData.reason} />
                <button type='submit' className='bg-green-400 p-3'>Book Appointment</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Appointment;
