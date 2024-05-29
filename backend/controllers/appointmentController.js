import Appointment from '../models/appointment.js';

export const createAppointment = async (req, res) => {
  const { patientName, doctorName, date, time, reason } = req.body;
  try {
    const newAppointment = new Appointment({ patientName, doctorName, date, time, reason });
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
