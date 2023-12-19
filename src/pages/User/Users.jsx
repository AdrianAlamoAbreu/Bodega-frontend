import React from 'react';
import './User.css';
import Reservas from '../reservas/reservas.jsx';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { getOneUser } from '../services/userService'

const Users = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await getOneUser(id)
        setUser(result)
      }
      fetchData()
    }, [])
  
    return (
      <div>
          { Object.keys(user).length !==0 ?
          <>
            <h3>
            <strong>Nombre:</strong> {user.user_name}
          </h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Teléfono:</strong> {user.number_phone}
          </p>
          <p>
            <strong>Reservas:</strong> 
            <li>
            {bookings}
            </li>
          </p>
          </> :
          <h1>
            Loading
          </h1>
        }
      </div>
    );
  }

export default Users;
