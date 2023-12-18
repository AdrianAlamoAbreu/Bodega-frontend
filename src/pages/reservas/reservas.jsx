import './reservas.css';
import Calendar from 'react-calendar';
import { useState } from 'react';


function App() {
  const [bookings, setBooking] = useState([]) 
  console.log(bookings)
  const handleBookings = (value) => {
    setBooking((prev) => ([...prev, value]))
  }
  return (
    <div className='app'>
      <h1 className='text-center'>Reservas</h1>
      <h1 className='text-center'>Choose date</h1>
      <div className='calendar-container'>
        <Calendar onChange={handleBookings} />    
   </div>
    </div>
  );   
}
const Reservas = () => {
    return (
      <div>{ App()}</div>
    )
  }
  
  export default Reservas