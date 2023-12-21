import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { getOwnProfile } from '../../services/getService'

 const Profile = () => {
  const [user, setUser] = useState({})

 useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getOwnProfile();
        setUser(result.user);
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      }
    };
    fetchData();
  }, []);

      return (
        <div className="container">
          {Object.keys(user).length !== 0 ? (
            <>
               <h3>
                <strong>Nombre:</strong> {user.user_name}
              </h3>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Nº de teléfono:</strong> 655-55-55-55
              </p>
              <p>
                <strong>Dirección:</strong> Calle Falsa, 123.
              </p>
            </>
          ) : (
            <h1>Cargando</h1>
          )}
            <>
              <h3>
                Reservas
              </h3>
              <h3>
                <strong>Fecha:</strong> 24/12/2023
              </h3>
              <p>
                <strong>Franja horaria:</strong> 14:00-15:00
              </p>
              <p>
                <strong>Nº de asistentes:</strong> 4 Personas
              </p>
              <p>
                <strong>Bodega:</strong> Bodega Sur
              </p>
            </> 
            <>
              <h3>
                Pedidos
              </h3>
              <h3>
                <strong>Fecha de pedido:</strong> 21/12/2023
              </h3>
              <p>
                <strong>Total:</strong> 37,00€
              </p>
              <p>
                <strong>Dirección de envío:</strong> Calle Falsa, 123
              </p>
            </>
        </div>
      );
    };
export default Profile
