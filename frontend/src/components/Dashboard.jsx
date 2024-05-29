import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/appointments');
                if (!response.ok) {
                    throw new Error('Failed to fetch appointments');
                }
                const data = await response.json();
                setAppointments(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="w-full h-[100vh] bg-slate-200 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Appointments Dashboard</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="w-[80%] bg-white p-4 rounded shadow">
                {appointments.length === 0 ? (
                    <p>No appointments available</p>
                ) : (
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2">Patient Name</th>
                                <th className="py-2">Doctor Name</th>
                                <th className="py-2">Date</th>
                                <th className="py-2">Time</th>
                                <th className="py-2">Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment._id} className="border-t text-center">
                                    <td className="py-2">{appointment.patientName}</td>
                                    <td className="py-2">{appointment.doctorName}</td>
                                    <td className="py-2">{new Date(appointment.date).toLocaleDateString()}</td>
                                    <td className="py-2">{appointment.time}</td>
                                    <td className="py-2">{appointment.reason}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
