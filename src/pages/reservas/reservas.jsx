import './reservas.css';
import Calendar from 'react-calendar';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

const Reservas = () => {
    return (
      <div>{ App()}</div>
    )
  }
  
  export default Reservas