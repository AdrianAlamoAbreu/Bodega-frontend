import "./reservas.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

const timeSlots = ["14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"];

function App() {
  const [bookings, setBookings] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [reservationDetails, setReservationDetails] = useState({
    timeSlot: "",
    numberOfPeople: "",
  });

  const handleBookings = (value) => {
    setBookings((prev) => [...prev, value]);
    setSelectedDate(value);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleReservationDetailsChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmReservation = () => {
    console.log("Fecha:", selectedDate);
    console.log("Franja horaria:", reservationDetails.timeSlot);
    console.log("Número de personas:", reservationDetails.numberOfPeople);
    setOpenModal(false);
  };

  return (
    <div className="app">
      <h1 className="text-center">Escoge fecha</h1>
      <div className="calendar-container">
        <Calendar onChange={handleBookings} />
      </div>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Reservar Franja Horaria
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Por favor, completa los detalles de tu reserva:
          </DialogContentText>
          <TextField
            fullWidth
            margin="normal"
            select
            label="Franja Horaria"
            name="timeSlot"
            value={reservationDetails.timeSlot}
            onChange={handleReservationDetailsChange}
          >
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </TextField>
          <TextField
            fullWidth
            margin="normal"
            label="Número de Personas"
            name="numberOfPeople"
            type="number"
            value={reservationDetails.numberOfPeople}
            onChange={handleReservationDetailsChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmReservation} color="primary" autoFocus>
            Confirmar Reserva
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const Reservas = () => {
  return <div>{App()}</div>;
};

export default Reservas;
