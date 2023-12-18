import './reservas.css'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Button, Modal, TextField } from '@mui/material';
import './reservas.css';

function App() {
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setModalOpen] = useState(false);
  const [timeSlot, setTimeSlot] = useState('');
  const [numPersons, setNumPersons] = useState('');

  const handleBookings = () => {
    const newBooking = {
      date: selectedDate.toDateString(),
      timeSlot,
      numPersons,
    };
    setBookings((prev) => [...prev, newBooking]);
    setModalOpen(true);
  };

  const handleDateChange = (value) => {
    setSelectedDate(value);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDateEntry = () => {
    setModalOpen(true);
  };

  return (
    <div className='app'>
      <h1 className='text-center'>Escoge fecha</h1>
      <div className='calendar-container'>
        <Calendar onChange={handleDateChange} onClickDay={handleDateEntry} />
      </div>

      <Modal open={isModalOpen} onClose={handleModalClose}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <h2>¡Alerta!</h2>
          <p>Has escogido una fecha: {selectedDate.toDateString()}</p>
          <TextField
            label='Franja horaria'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={(e) => setTimeSlot(e.target.value)}
          />
          <TextField
            label='Número de personas'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={(e) => setNumPersons(e.target.value)}
          />
          <Button onClick={handleBookings} variant="contained">
            Reservar
          </Button>
          <Button onClick={handleModalClose} variant="contained">
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}

const Reservas = () => {
  return <div>{App()}</div>;
};

export default Reservas;
